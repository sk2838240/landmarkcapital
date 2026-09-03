import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/data/navigation";
import { Logo } from "@/components/common/Logo";
import { ButtonLink } from "@/components/common/Button";
import { media } from "@/data/media";
import { cn } from "@/lib/utils";
import { durations, easings, transitions } from "@/lib/motion";

const aboutCards = [
  {
    label: "Overview",
    to: "/about",
    cta: "Explore →",
    src: media.aboutMenu.overview.src,
    alt: media.aboutMenu.overview.alt,
  },
  {
    label: "Transactions",
    to: "/transactions",
    cta: "View Transactions →",
    src: media.aboutMenu.transactions.src,
    alt: media.aboutMenu.transactions.alt,
  },
  {
    label: "Team",
    to: "/leadership",
    cta: "Meet Our Team →",
    src: media.aboutMenu.team.src,
    alt: media.aboutMenu.team.alt,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const menuId = useId();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname.startsWith("/about");
  const onDarkHero = isHome || isAbout;
  const onDark = onDarkHero && !scrolled && !open;

  const canHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDropdown = (label: string) => {
    clearCloseTimer();
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleDropdown = (label: string) => {
    clearCloseTimer();
    setActiveDropdown((current) => (current === label ? null : label));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!activeDropdown) return;
    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDropdown]);

  useEffect(() => () => clearCloseTimer(), []);

  const isAboutDropdownOpen = activeDropdown === "About";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300",
          scrolled || open
            ? "glass border-b border-border"
            : onDarkHero
              ? "bg-gradient-to-b from-charcoal/55 via-charcoal/25 to-transparent"
              : "bg-transparent"
        )}
      >
        <div className="container-tb relative z-50 flex items-center justify-between h-[72px] overflow-visible">
          <Link to="/" className="z-10 inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/5" aria-label="Landmark Capital home">
            <Logo className="h-7 w-auto lg:h-8" />
          </Link>

          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-0.5 overflow-visible"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const isOpen = activeDropdown === item.label;
              const isSectionActive = location.pathname.startsWith(item.to);
              const dropdownPanelId = `${menuId}-${item.label.replace(/\s+/g, "-")}`;

              const isAboutMenu = item.label === "About";

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && openDropdown(item.label)}
                  onMouseLeave={() => item.children && scheduleClose()}
                >
                  {item.children ? (
                    <button
                      type="button"
                      className={cn(
                        "px-3 py-2 text-[12px] tracking-[0.07em] uppercase transition-colors duration-200",
                        isOpen || isSectionActive
                          ? onDark
                            ? "text-white"
                            : "text-crimson-500"
                          : onDark
                            ? "text-white/85 hover:text-white"
                            : "text-charcoal hover:text-crimson-500"
                      )}
                      aria-expanded={isOpen}
                      aria-haspopup="menu"
                      aria-controls={dropdownPanelId}
                      onClick={() => {
                        if (canHover()) {
                          openDropdown(item.label);
                          return;
                        }
                        toggleDropdown(item.label);
                      }}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "ml-1 text-[8px] align-middle opacity-60 inline-block transition-transform",
                          isOpen && "rotate-180"
                        )}
                      >
                        ▾
                      </span>
                    </button>
                  ) : (
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "px-3 py-2 text-[12px] tracking-[0.07em] uppercase transition-colors duration-200",
                          isActive
                            ? onDark
                              ? "text-white"
                              : "text-crimson-500"
                            : onDark
                              ? "text-white/85 hover:text-white"
                              : "text-charcoal hover:text-crimson-500"
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}

                  <AnimatePresence>
                    {item.children && isOpen && (
                      <motion.div
                        key={dropdownPanelId}
                        id={dropdownPanelId}
                        role="menu"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.28, ease: easings.outExpo }}
                        className={cn(
                          "absolute top-full left-1/2 -translate-x-1/2 z-[60] pt-3",
                          isAboutMenu ? "w-[680px]" : "w-auto min-w-[200px]"
                        )}
                        onMouseEnter={() => openDropdown(item.label)}
                        onMouseLeave={scheduleClose}
                      >
                        {isAboutMenu ? (
                          <div className="bg-[#1b2531] border border-white/10 rounded-[20px] p-5 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
                            <div className="grid grid-cols-3 gap-4">
                              {aboutCards.map((card) => {
                                const isActive =
                                  activeDropdown === "About" &&
                                  location.pathname === card.to;
                                return (
                                  <Link
                                    key={card.label}
                                    to={card.to}
                                    role="menuitem"
                                    className={cn(
                                      "group relative flex flex-col overflow-hidden rounded-[16px] aspect-[3/4] transition-all duration-300",
                                      isActive
                                        ? "ring-2 ring-bronze/70 scale-[1.02]"
                                        : "hover:ring-2 hover:ring-bronze/40 hover:scale-[1.02]"
                                    )}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <motion.img
                                      src={card.src}
                                      alt={card.alt}
                                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                    <div
                                      className="absolute inset-0 bg-gradient-to-t from-[#0d1821]/95 via-[#0d1821]/40 to-transparent"
                                    />
                                    <div
                                      aria-hidden
                                      className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                      style={{
                                        background:
                                          "linear-gradient(120deg, transparent 0%, transparent 30%, rgba(183,53,58,0.55) 45%, rgba(232,90,100,0.7) 50%, rgba(183,53,58,0.55) 55%, transparent 70%, transparent 100%)",
                                        mixBlendMode: "screen",
                                      }}
                                    />
                                    <div
                                      aria-hidden
                                      className="pointer-events-none absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                      style={{
                                        background:
                                          "radial-gradient(60% 80% at 50% 100%, rgba(183,53,58,0.45) 0%, transparent 70%)",
                                      }}
                                    />
                                    <div className="relative z-10 flex flex-col justify-end h-full p-5">
                                      <p className="text-[10px] uppercase tracking-[0.2em] text-bronze/80 mb-2 transition-colors duration-300 group-hover:text-[#E85A64]">
                                        {card.label}
                                      </p>
                                      <span className="text-[13px] font-medium text-white/90 tracking-wide">
                                        {card.cta}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div className="bg-paper border border-border shadow-md rounded-[10px] p-1.5">
                            {item.children.map((child) => (
                              <Link
                                key={child.to}
                                to={child.to}
                                role="menuitem"
                                className="block px-4 py-2.5 text-sm text-charcoal hover:bg-stone hover:text-crimson-500 focus-visible:bg-stone focus-visible:text-crimson-500 rounded-[8px] transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <ButtonLink to="/contact" variant="primary" size="sm" className="ml-3">
              Inquire
            </ButtonLink>
          </nav>

          <button
            className="lg:hidden relative z-50 w-10 h-10 grid place-items-center"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "absolute h-[1.5px] w-6 transition-transform duration-300",
                open || !onDark ? "bg-charcoal" : "bg-white",
                open ? "rotate-45" : "-translate-y-[5px]"
              )}
            />
            <span
              className={cn(
                "absolute h-[1.5px] w-6 transition-transform duration-300",
                open || !onDark ? "bg-charcoal" : "bg-white",
                open ? "-rotate-45" : "translate-y-[5px]"
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitions.fade}
            className="lg:hidden fixed inset-0 z-40 bg-ivory"
          >
            <div className="h-full flex flex-col pt-[100px] container-tb overflow-y-auto pb-12">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.label} className="border-b border-border">
                    {item.children ? (
                      <>
                        <p className="pt-5 pb-2 text-xs tracking-[0.14em] uppercase text-slate-blue">
                          {item.label}
                        </p>
                        <div className="pb-4 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="display-3 py-2 text-charcoal"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link to={item.to} className="block py-5 display-3 text-charcoal">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <ButtonLink to="/contact" variant="primary" className="mt-8 self-start">
                Inquire
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

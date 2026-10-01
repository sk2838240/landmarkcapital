import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import "./FirmOverview.css";

/**
 * Firm Overview: a Pan-India footprint across every asset class.
 * Interactive India map with lat/lon-placed market markers, geography and
 * asset-class filters, and a live location card.
 */

const MAP_BOUNDS = { minLon: 68.0, maxLon: 97.5, minLat: 6.7, maxLat: 37.1 };
const NUDGE = { x: 0, y: 0 };

type City = { city: string; lat: number; lon: number; assets: string; description: string };

const cities: City[] = [
  {
    city: "Delhi NCR",
    lat: 28.61,
    lon: 77.21,
    assets: "residential commercial retail student",
    description: "A major national market with experience across residential, commercial, retail and student housing.",
  },
  {
    city: "Jaipur",
    lat: 26.91,
    lon: 75.79,
    assets: "residential plotted",
    description: "A growing northern market contributing to residential and plotted development.",
  },
  {
    city: "Lucknow",
    lat: 26.85,
    lon: 80.95,
    assets: "residential commercial",
    description: "An expanding northern market with residential and commercial exposure.",
  },
  {
    city: "Ahmedabad",
    lat: 23.02,
    lon: 72.57,
    assets: "residential commercial industrial",
    description: "A western market spanning residential, commercial and industrial assets.",
  },
  {
    city: "Mumbai",
    lat: 19.08,
    lon: 72.88,
    assets: "residential commercial retail industrial",
    description: "A key western India market spanning residential, commercial, retail and industrial opportunities.",
  },
  {
    city: "Pune / Karjat",
    lat: 18.52,
    lon: 73.86,
    assets: "residential plotted",
    description: "A growing western market with residential and plotted development exposure.",
  },
  {
    city: "Nagpur",
    lat: 21.15,
    lon: 79.09,
    assets: "industrial commercial plotted",
    description: "A central India location with industrial, commercial and plotted development exposure.",
  },
  {
    city: "Kolkata",
    lat: 22.57,
    lon: 88.36,
    assets: "residential commercial retail",
    description: "An eastern India market contributing to the firm's diversified geographic footprint.",
  },
  {
    city: "Hyderabad",
    lat: 17.39,
    lon: 78.49,
    assets: "residential commercial student",
    description: "A major southern growth market spanning residential, commercial and student housing.",
  },
  {
    city: "Bengaluru",
    lat: 12.97,
    lon: 77.59,
    assets: "residential commercial student",
    description: "A technology-led market supporting residential, commercial and student housing.",
  },
  {
    city: "Chennai",
    lat: 13.08,
    lon: 80.27,
    assets: "industrial residential commercial",
    description: "A strategic southern market with residential, commercial and industrial exposure.",
  },
  {
    city: "Pondicherry",
    lat: 11.93,
    lon: 79.83,
    assets: "residential plotted",
    description: "A regional southern market contributing to residential and plotted development.",
  },
];

const geographyFilters = [
  "Delhi NCR",
  "Mumbai",
  "Ahmedabad",
  "Pune / Karjat",
  "Hyderabad",
  "Bengaluru",
  "Chennai",
  "Kolkata",
];

const assetFilters = [
  { key: "industrial", label: "Warehousing / Industrial" },
  { key: "residential", label: "Residential" },
  { key: "plotted", label: "Plotted Development" },
  { key: "student", label: "Student Housing" },
  { key: "retail", label: "Mall / Retail" },
  { key: "commercial", label: "Commercial" },
];

const defaultCard = {
  label: "PAN-INDIA PRESENCE",
  title: "Explore Our Footprint",
  text: "Select a location on the map to explore the firm's presence across India's key real estate markets.",
};

type CardContent = { label: string; title: string; text: string };

export function FirmOverview() {
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ once: true, threshold: 0.15 });
  const holderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [activeAsset, setActiveAsset] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [card, setCard] = useState<CardContent>(defaultCard);
  const [cardChanging, setCardChanging] = useState(false);

  const updateCard = (next: CardContent) => {
    setCardChanging(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setCard(next);
      setCardChanging(false);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const selectCity = (city: string) => {
    setActiveCity(city);
    setActiveAsset(null);
    setActiveFilter(city);
    updateCard({
      label: "ACTIVE MARKET",
      title: city,
      text:
        cities.find((c) => c.city === city)?.description ??
        "Explore the firm's presence across this market.",
    });
  };

  const selectAsset = (key: string, label: string) => {
    setActiveCity(null);
    setActiveAsset(key);
    setActiveFilter(label);
    const count = cities.filter((c) => c.assets.split(" ").includes(key)).length;
    updateCard({
      label: "ASSET CLASS",
      title: label,
      text: `${count} markets highlighted across the firm's Pan-India footprint.`,
    });
  };

  const reset = () => {
    setActiveCity(null);
    setActiveAsset(null);
    setActiveFilter("all");
    updateCard(defaultCard);
  };

  const markerState = (c: City) => {
    if (activeCity) {
      const active = c.city === activeCity;
      return { active, dim: !active };
    }
    if (activeAsset) {
      const active = c.assets.split(" ").includes(activeAsset);
      return { active, dim: !active };
    }
    return { active: false, dim: false };
  };

  const position = (c: City) => ({
    left: `${((c.lon - MAP_BOUNDS.minLon) / (MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon)) * 100 + NUDGE.x}%`,
    top: `${((MAP_BOUNDS.maxLat - c.lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) * 100 + NUDGE.y}%`,
  });

  /* Calibration helper: Shift+click the map to log the lon/lat under the cursor. */
  const handleMapClick = (e: React.MouseEvent) => {
    if (!e.shiftKey || !holderRef.current) return;
    const r = holderRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    console.log(
      "lon:",
      (MAP_BOUNDS.minLon + px * (MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon)).toFixed(2),
      "lat:",
      (MAP_BOUNDS.maxLat - py * (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)).toFixed(2)
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`pan-india-section${inView ? " in-view" : ""}`}
    >
      <div className="pan-container">
        <div className="pan-eyebrow">FIRM OVERVIEW</div>

        <div className="pan-header-row">
          <h1>
            A Pan-India Footprint,
            <br />
            Across Every <span>Asset Class</span>
          </h1>
        </div>

        <div className="pan-grid">
          {/* MAP */}
          <div className="pan-map-area">
            <div className="pan-radar pan-radar-1" />
            <div className="pan-radar pan-radar-2" />
            <div className="pan-radar pan-radar-3" />

            <div className="pan-map-holder" ref={holderRef} onClick={handleMapClick}>
              <img
                className="pan-india-map"
                src="/media/india-map.svg"
                alt="India map showing states and territories"
                loading="lazy"
                decoding="async"
              />

              {cities.map((c, i) => {
                const state = markerState(c);
                return (
                  <button
                    key={c.city}
                    type="button"
                    className={`pan-city-marker${state.active ? " active" : ""}${state.dim ? " dim" : ""}`}
                    style={{ ...position(c), animationDelay: `${0.65 + i * 0.15}s` }}
                    onClick={() => selectCity(c.city)}
                    aria-label={c.city}
                  >
                    <span className="pan-city-tooltip">{c.city}</span>
                  </button>
                );
              })}

              <div className="pan-map-counter">
                <strong>12</strong>
                <span>
                  MARKETS
                  <br />
                  ACROSS INDIA
                </span>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="pan-content">
            <div className="pan-experience">
              <div className="pan-experience-number">
                30<sup>+</sup>
              </div>
              <div className="pan-experience-copy">
                <strong>Years of Leadership</strong>
                <p>Experience spanning multiple geographies and real estate asset classes.</p>
              </div>
            </div>

            <div className={`pan-location-card${cardChanging ? " changing" : ""}`}>
              <div className="pan-location-label">{card.label}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>

            <div className="pan-filter-group">
              <div className="pan-filter-title">EXPLORE BY GEOGRAPHY</div>
              <div className="pan-filters">
                <button
                  type="button"
                  className={`pan-filter${activeFilter === "all" ? " active" : ""}`}
                  onClick={reset}
                >
                  All Markets
                </button>
                {geographyFilters.map((city) => (
                  <button
                    key={city}
                    type="button"
                    className={`pan-filter${activeFilter === city ? " active" : ""}`}
                    onClick={() => selectCity(city)}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="pan-filter-group">
              <div className="pan-filter-title">EXPLORE BY ASSET CLASS</div>
              <div className="pan-filters">
                {assetFilters.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    className={`pan-filter${activeFilter === f.label ? " active" : ""}`}
                    onClick={() => selectAsset(f.key, f.label)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pan-statement">
              <p>
                Experience not limited to one city or one asset class, but its depth proven across
                every one of them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

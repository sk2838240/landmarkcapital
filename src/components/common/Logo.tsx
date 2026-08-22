import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "mark" | "lockup";
  /** Reserved for API compatibility — official mark is crimson on all surfaces */
  onDark?: boolean;
};

/**
 * Official Landmark Capital lockup — serif "Landmark" above crimson "CAPITAL" band.
 */
export function Logo({ className, variant = "lockup", onDark: _onDark = false }: Props) {
  if (variant === "mark") {
    return (
      <img
        src="/LANDMARK%20LOGO.jpg"
        alt=""
        aria-hidden
        className={cn("h-8 w-auto select-none", className)}
        draggable={false}
      />
    );
  }

  return (
    <img
      src="/LANDMARK%20LOGO.jpg"
      alt="Landmark Capital"
      className={cn("h-9 w-auto select-none lg:h-10", className)}
      draggable={false}
    />
  );
}

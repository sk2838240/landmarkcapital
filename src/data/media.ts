/**
 * Centralised image asset registry.
 *
 * Institutional imagery per Brand Design System v1.0 §5.
 * Replace external URLs with `/media/<name>.jpg` once licensed assets are
 * placed in `public/media/`. All consumers import from this file so that
 * swapping the source is a one-line change.
 */

export const media = {
  hero: {
    /** Institutional skyline — replace with licensed Landmark asset */
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2400&q=85",
    alt: "Urban commercial skyline at dusk — institutional real estate context",
  },
  about: {
    /** Grade-A institutional architecture — replace with licensed Landmark asset */
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    alt: "Institutional commercial architecture, glass and stone façade",
  },
  manifesto: {
    /** The asset itself — a completed development, the subject of selection and structuring */
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80",
    alt: "Grade-A residential development — the kind of opportunity underwritten deal by deal",
  },
  /**
   * Fund Manager feature (Home → Leadership spotlight).
   * Self-hosted interview — drop the file at `public/media/ashish-joshi.mp4`.
   * Until then the poster (existing headshot) shows and the play button is inert.
   * To use a YouTube/Vimeo link instead, swap `LeadershipSpotlight` to an <iframe>.
   */
  founder: {
    poster: "/team/ashish-joshi.jpg",
    src: "/media/ashish-joshi.mp4",
    alt: "Ashish Joshi, Managing Partner & Fund Manager at Landmark Capital",
  },
  /** One visual per Landmark Difference principle — order matches `differences` in Difference.tsx */
  principles: [
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
      alt: "Symmetrical institutional façade — aligned structure and shared purpose",
    },
    {
      src: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80",
      alt: "Residential architecture — real estate held from acquisition through exit",
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      alt: "Measured construction and structure — risk considered before speed",
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
      alt: "Daylit glass interior — reporting with nothing hidden",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      alt: "Quiet, considered interior — fewer rooms, better proportion",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      alt: "Shared working table — relationships built over time",
    },
  ],
} as const;

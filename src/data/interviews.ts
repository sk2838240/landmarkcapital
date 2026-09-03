export type Interview = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  speaker: {
    name: string;
    role: string;
  };
  duration: string;
  thumbnail: string;
  thumbnailAlt: string;
  /** Video source — YouTube/Vimeo embed URL or self-hosted MP4. Placeholder until client supplies footage. */
  videoUrl?: string;
};

/**
 * Leadership Insights — placeholder video interviews.
 *
 * Copy is written to reflect Landmark Capital's real investment thesis
 * (Grade\u2011A warehousing, institutional AIFs, disciplined underwriting).
 * Thumbnails point to Unsplash and should be swapped for real recording
 * stills once the client provides interview footage.
 */
export const interviews: Interview[] = [
  {
    id: "institutional-real-estate",
    eyebrow: "In conversation",
    title: "The institutionalization of Indian real estate.",
    description:
      "Ashish Joshi on the structural shift from fragmented development to professionally managed, yield-focused assets — and how Landmark Capital positioned its platform for this transition well before the market caught up.",
    speaker: {
      name: "Ashish Joshi",
      role: "Founder & Managing Partner",
    },
    duration: "18:42",
    thumbnail: "/media/aj-video-poster.jpg",
    thumbnailAlt: "Ashish Joshi speaking during a filmed interview",
    videoUrl: "/landmark-vid-comp.mp4",
  },
  {
    id: "warehousing-thesis",
    eyebrow: "Sector perspective",
    title: "Why warehousing is the decade's core allocation.",
    description:
      "Manish Maloo unpacks the demand story behind Grade\u2011A warehousing — from 3PL consolidation and e-commerce absorption to the multimodal corridors reshaping India's logistics map.",
    speaker: {
      name: "Manish Maloo",
      role: "Investment Committee",
    },
    duration: "12:15",
    thumbnail:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=85",
    thumbnailAlt: "Interior of a modern Grade-A warehouse with tall racking and clean floors",
  },
  {
    id: "risk-before-velocity",
    eyebrow: "Investor letter",
    title: "Risk before velocity: how we underwrite.",
    description:
      "Ravindra Gupta on Landmark's underwriting philosophy — why capital preservation guides every decision, and how deal-level SPVs give investors visibility no pooled fund can match.",
    speaker: {
      name: "Ravindra Gupta",
      role: "Partner",
    },
    duration: "15:08",
    thumbnail:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=85",
    thumbnailAlt: "Portrait-style photograph of a professional in a considered office setting",
  },
];

import { Reveal } from "@/components/common/Reveal";
import "./FirmOverview.css";

const cities = [
  { key: "jaipur", label: <>Jaipur</> },
  { key: "delhi", label: <>Delhi<br />NCR</> },
  { key: "lucknow", label: <>Lucknow</> },
  { key: "ahmedabad", label: <>Ahmedabad</> },
  { key: "mumbai", label: <>Mumbai</> },
  { key: "pune", label: <>Pune/<br />Karjat</> },
  { key: "nagpur", label: <>Nagpur</> },
  { key: "hyderabad", label: <>Hyderabad</> },
  { key: "bengaluru", label: <>Bengaluru</> },
  { key: "chennai", label: <>Chennai</> },
  { key: "kolkata", label: <>Kolkata</> },
  { key: "pondicherry", label: <>Pondicherry</> },
];

const assetClasses = [
  "Warehousing / Industrial",
  "Residential",
  "Plotted Development",
  "Student Housing",
  "Mall / Retail",
  "Commercial",
];

const leaderLines = [
  [130, 115, 168, 209],
  [202, 97, 183, 190],
  [268, 147, 221, 210],
  [100, 233, 135, 252],
  [30, 305, 138, 295],
  [48, 415, 149, 301],
  [226, 277, 203, 273],
  [166, 347, 197, 314],
  [140, 415, 187, 362],
  [246, 379, 216, 362],
  [306, 235, 301, 257],
  [280, 429, 211, 375],
];

const leaderDots: [number, number][] = [
  [168, 209],
  [183, 190],
  [221, 210],
  [135, 252],
  [138, 295],
  [149, 301],
  [203, 273],
  [197, 314],
  [187, 362],
  [216, 362],
  [301, 257],
  [211, 375],
];

/**
 * Firm Overview, pan-India footprint map with geographies and asset classes.
 * Replaces the former "Our Journey" timeline on the About page.
 */
export function FirmOverview() {
  return (
    <section className="firm-overview">
      <div className="firm-container">
        <div className="top-bar">
          <Reveal>
            <div className="section-label">Firm Overview</div>
          </Reveal>
          <div className="top-arrow">
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 0V25" stroke="#0C1F2E" strokeWidth="2" />
              <path d="M2 18L13 29L24 18" stroke="#0C1F2E" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div />
        </div>

        <Reveal delay={0.05}>
          <h1 className="section-title">A Pan-India Footprint, Across Every Asset Class</h1>
        </Reveal>

        <div className="firm-grid">
          <Reveal>
            <div className="map-wrapper">
              <div className="india-map-area">
                <img
                  className="india-map-image"
                  src="/media/india-map.png"
                  alt="Map of India marking Landmark Capital's presence across twelve cities"
                  loading="lazy"
                  decoding="async"
                />

                <svg className="map-lines" viewBox="0 0 480 520">
                  {leaderLines.map(([x1, y1, x2, y2]) => (
                    <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
                  ))}
                  {leaderDots.map(([cx, cy]) => (
                    <circle key={`dot-${cx}-${cy}`} cx={cx} cy={cy} r="3" />
                  ))}
                </svg>

                {cities.map((c, i) => (
                  <Reveal key={c.key} delay={Math.min(0.1 + i * 0.03, 0.45)}>
                    <div className={`map-location ${c.key}`}>
                      <span>{c.label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overview-content">
              <p className="intro">
                More than three decades of leadership experience across geographies, and across
                asset classes.
              </p>

              <h3 className="content-heading">Geographies</h3>
              <p className="geographies">
                Delhi NCR&nbsp;&nbsp;·&nbsp;&nbsp;Lucknow&nbsp;&nbsp;·&nbsp;&nbsp;Ahmedabad&nbsp;&nbsp;·&nbsp;&nbsp;Mumbai&nbsp;&nbsp;·&nbsp;&nbsp;Pune&nbsp;&nbsp;·&nbsp;&nbsp;Hyderabad&nbsp;&nbsp;·&nbsp;&nbsp;
                Bengaluru&nbsp;&nbsp;·&nbsp;&nbsp;Kolkata&nbsp;&nbsp;·&nbsp;&nbsp;Jaipur&nbsp;&nbsp;·&nbsp;&nbsp;Chennai&nbsp;&nbsp;·&nbsp;&nbsp;Nagpur&nbsp;&nbsp;·&nbsp;&nbsp;Pondicherry
              </p>

              <h3 className="content-heading asset-heading">Asset Classes</h3>
              <div className="asset-list">
                {assetClasses.map((a) => (
                  <div key={a} className="asset-pill">{a}</div>
                ))}
              </div>

              <div className="statement">
                <p>
                  Experience not limited to one city or one asset class, but its depth proven
                  across every one of them
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

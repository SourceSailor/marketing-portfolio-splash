/**
 * Discipline icons on the main site's 32px grid. Each has a resting and a
 * hover variant, matching the swap on the main site's "Explore the work" cards.
 */
const rest = {
  campaigns: (
    <>
      <rect x="8" y="6" width="16" height="22" rx="2" />
      <path d="M11.5 4v4M16 4v4M20.5 4v4" />
      <path d="M10.5 15q1.2-1.4 2.4 0t2.4 0 2.4 0 2.4 0" />
      <path d="M10.5 19.5q1.2-1.4 2.4 0t2.4 0 2.4 0" />
      <path d="M10.5 24h4" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="11" width="15" height="12" rx="2" />
      <path d="M6 11V8h9v3" />
      <path d="M18 14h3v6h-3" />
      <path d="M21 13.5 28.5 10v14L21 20.5z" />
    </>
  ),
  integrated: (
    <>
      <circle cx="16" cy="16" r="3" />
      <circle cx="6" cy="7" r="2.5" />
      <circle cx="26" cy="7" r="2.5" />
      <circle cx="6" cy="25" r="2.5" />
      <circle cx="26" cy="25" r="2.5" />
      <path d="M8 9l5.8 4.8M24 9l-5.8 4.8M8 23l5.8-4.8M24 23l-5.8-4.8" />
    </>
  ),
  web: (
    <>
      <rect x="6" y="6.5" width="20" height="14" rx="1.5" />
      <path d="M2.5 24.5h27l-1.5 2.5H4z" />
    </>
  ),
  photo: (
    <>
      <path d="M4 12a2 2 0 0 1 2-2h4l2-3.5h8L22 10h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <circle cx="16" cy="17.5" r="5" />
      <circle cx="16" cy="17.5" r="1.75" />
      <path d="M6.5 7h3" />
    </>
  ),
  motion: (
    <>
      <path d="M4 24c4 0 5-16 12-16s8 16 12 16" />
      <circle cx="16" cy="8" r="2.5" />
      <path d="M4 28h24" />
    </>
  ),
  social: (
    <>
      <path d="M5 7a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H13l-6 5v-5H8a3 3 0 0 1-3-3z" />
      <path d="M16 16.5s-4-2.4-4-5.1a2.2 2.2 0 0 1 4-1.2 2.2 2.2 0 0 1 4 1.2c0 2.7-4 5.1-4 5.1z" />
    </>
  ),
};

const hover = {
  campaigns: (
    <>
      <g transform="translate(-4 0)">
        <rect x="8" y="6" width="16" height="22" rx="2" />
        <path d="M11.5 4v4M16 4v4M20.5 4v4" />
        <path d="M10.5 15q1.2-1.4 2.4 0t2.4 0 2.4 0 2.4 0" />
        <path d="M10.5 19.5q1.2-1.4 2.4 0t2.4 0 2.4 0" />
        <path d="M10.5 24h4" />
      </g>
      <g transform="translate(23 27.5) rotate(-65)">
        <path d="M0 0l4-2h12v4H4z" />
        <path d="M13-2v4" />
      </g>
    </>
  ),
  video: (
    <>
      <rect x="3" y="11" width="15" height="12" rx="2" />
      <path d="M6 11V8h9v3" />
      <path d="M18 14h3v6h-3" />
      <path d="M21 13.5 28.5 10v14L21 20.5z" />
      <rect x="6" y="1.5" width="9" height="6" rx="1" />
      <circle cx="10.5" cy="17" r="1.25" fill="currentColor" />
    </>
  ),
  integrated: (
    <>
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <circle cx="16" cy="16" r="7" opacity="0.6" />
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="27" cy="6" r="2.5" />
      <circle cx="5" cy="26" r="2.5" />
      <circle cx="27" cy="26" r="2.5" />
      <path d="M7 8l4.5 3.5M25 8l-4.5 3.5M7 24l4.5-3.5M25 24l-4.5-3.5" />
    </>
  ),
  web: (
    <>
      <rect x="6" y="6.5" width="20" height="14" rx="1.5" />
      <path d="M2.5 24.5h27l-1.5 2.5H4z" />
      <path d="M9.5 10.5h4.5" />
      <path d="M12.5 13.5h7.5" />
      <path d="M12.5 16.5h4" />
      <path d="M19.5 16.5h1.5" />
    </>
  ),
  photo: (
    <>
      <path d="M4 12a2 2 0 0 1 2-2h4l2-3.5h8L22 10h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <rect x="7.5" y="13.5" width="12" height="9" rx="1" />
      <rect x="13.5" y="7.5" width="5" height="2.5" rx=".5" />
      <circle cx="24" cy="15" r="1" />
      <circle cx="24" cy="20.5" r="1" />
    </>
  ),
  motion: (
    <>
      <path d="M4 24c4 0 5-16 12-16s8 16 12 16" opacity="0.45" />
      <circle cx="22" cy="12" r="2.5" fill="currentColor" />
      <path d="M13 9h-4M14 13H8M15 17h-5" />
      <path d="M4 28h24" />
    </>
  ),
};

function Svg({ children, size, className }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export default function Icon({ name, size = 24, className = "" }) {
  return (
    <Svg size={size} className={className}>
      {rest[name]}
    </Svg>
  );
}

/** Resting and hover icon stacked; CSS on .explore-card swaps them. */
export function SwapIcon({ name }) {
  return (
    <span className="explore-icon">
      <Svg className="is-rest">{rest[name]}</Svg>
      <Svg className="is-hover">{hover[name]}</Svg>
    </span>
  );
}

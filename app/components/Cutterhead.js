// Original TBM cutterhead illustration, rotates via CSS (respects reduced-motion).
const RINGS = [
  { r: 205, n: 12, off: 0 },
  { r: 150, n: 10, off: 18 },
  { r: 95, n: 8, off: 22.5 },
];

function cutters() {
  const cx = 250, cy = 250, out = [];
  RINGS.forEach(({ r, n, off }) => {
    for (let i = 0; i < n; i++) {
      const a = ((off + (i * 360) / n) * Math.PI) / 180;
      out.push({ x: +(cx + r * Math.cos(a)).toFixed(1), y: +(cy + r * Math.sin(a)).toFixed(1) });
    }
  });
  return out;
}

export default function Cutterhead({ className = 'cutter' }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 500 500">
        <defs>
          <radialGradient id="hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d8262f" />
            <stop offset="100%" stopColor="#7d141a" />
          </radialGradient>
        </defs>
        <g className="spin" fill="none" stroke="#3c434e" strokeWidth="2">
          <circle cx="250" cy="250" r="232" stroke="#4a515c" strokeWidth="6" />
          <circle cx="250" cy="250" r="212" />
          <circle cx="250" cy="250" r="150" />
          <circle cx="250" cy="250" r="95" />
          <g stroke="#333a44" strokeWidth="14">
            <line x1="250" y1="42" x2="250" y2="458" />
            <line x1="42" y1="250" x2="458" y2="250" />
            <line x1="103" y1="103" x2="397" y2="397" />
            <line x1="397" y1="103" x2="103" y2="397" />
          </g>
          <g fill="#1b1f27" stroke="#4a515c" strokeWidth="2">
            <path d="M250 250 L250 175 A75 75 0 0 1 316 213 Z" />
            <path d="M250 250 L325 250 A75 75 0 0 1 287 316 Z" />
            <path d="M250 250 L250 325 A75 75 0 0 1 184 287 Z" />
            <path d="M250 250 L175 250 A75 75 0 0 1 213 184 Z" />
          </g>
          {cutters().map((c, i) => (
            <g key={i}>
              <circle cx={c.x} cy={c.y} r="9" fill="#20242c" stroke="#5a626d" strokeWidth="2" />
              <circle cx={c.x} cy={c.y} r="3.4" fill="#d8262f" />
            </g>
          ))}
          <circle cx="250" cy="250" r="38" fill="url(#hub)" stroke="#a81a22" strokeWidth="3" />
          <circle cx="250" cy="250" r="12" fill="#0d0f12" stroke="#d8262f" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

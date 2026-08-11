// Line glyphs used on product cards.
const G = {
  tbm: (
    <>
      <circle cx="32" cy="32" r="26" /><circle cx="32" cy="32" r="9" />
      <line x1="32" y1="6" x2="32" y2="58" /><line x1="6" y1="32" x2="58" y2="32" />
      <line x1="14" y1="14" x2="50" y2="50" /><line x1="50" y1="14" x2="14" y2="50" />
    </>
  ),
  pipe: (
    <>
      <circle cx="20" cy="32" r="14" /><circle cx="20" cy="32" r="6" />
      <line x1="20" y1="18" x2="52" y2="18" /><line x1="20" y1="46" x2="52" y2="46" />
      <path d="M52 18 A14 14 0 0 1 52 46" />
    </>
  ),
  exc: (
    <>
      <path d="M8 44 L24 20 L40 34 L56 12" /><rect x="6" y="46" width="52" height="12" />
      <line x1="18" y1="46" x2="18" y2="58" /><line x1="46" y1="46" x2="46" y2="58" />
    </>
  ),
  min: (
    <>
      <path d="M6 50 L26 50 L34 30 L58 30" /><path d="M34 30 L28 14 L44 14 L50 30" />
      <circle cx="16" cy="54" r="5" /><circle cx="44" cy="54" r="5" />
    </>
  ),
  rail: (
    <>
      <line x1="24" y1="8" x2="24" y2="56" /><line x1="40" y1="8" x2="40" y2="56" />
      <line x1="16" y1="16" x2="48" y2="16" /><line x1="16" y1="30" x2="48" y2="30" />
      <line x1="16" y1="44" x2="48" y2="44" />
    </>
  ),
};

export default function Glyph({ name }) {
  return (
    <span className="glyph">
      <svg viewBox="0 0 64 64">{G[name] || G.tbm}</svg>
    </span>
  );
}

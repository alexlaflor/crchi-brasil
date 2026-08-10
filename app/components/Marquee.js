export default function Marquee({ text = 'VAMOS CONSTRUIR JUNTOS', repeat = 6 }) {
  const items = Array.from({ length: repeat });
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {items.map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}

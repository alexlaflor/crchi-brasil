'use client';
import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setSeen(true), io.disconnect())),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal${seen ? ' in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

import React, { useEffect, useRef } from 'react';

/**
 * Custom cursor: small glowing dot (instant) + outer ring (lerp lag).
 * Only activates on true pointer devices (no touch).
 */
const CursorFollower: React.FC = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const raf     = useRef<number>();

  useEffect(() => {
    // Only activate for real pointer devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        dotRef.current.style.opacity = '1';
      }
    };

    const animate = () => {
      // Lerp ring toward real cursor
      ring.current.x += (mouse.current.x - ring.current.x) * 0.11;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
        ringRef.current.style.opacity = '1';
      }
      raf.current = requestAnimationFrame(animate);
    };

    // Grow ring when hovering interactive elements
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"], input, textarea, select, label')) {
        ringRef.current?.classList.add('cursor-ring--active');
        dotRef.current?.classList.add('cursor-dot--active');
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"], input, textarea, select, label')) {
        ringRef.current?.classList.remove('cursor-ring--active');
        dotRef.current?.classList.remove('cursor-dot--active');
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover',  onOver);
    document.addEventListener('mouseout',   onOut);
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover',  onOver);
      document.removeEventListener('mouseout',   onOut);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CursorFollower;

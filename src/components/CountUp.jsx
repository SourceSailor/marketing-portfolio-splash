import { useEffect, useRef, useState } from "react";

/**
 * Animates the number inside a stat ("660K+", "$0.33", "97.7%", "5×") from
 * zero when it scrolls into view. Prefix, suffix, and decimal places come from
 * the string itself, so content.js stays plain text. Screen readers always get
 * the final value; reduced-motion visitors see it immediately.
 */
function parse(value) {
  const m = String(value).match(/^(\D*?)([\d,]*\.?\d+)(.*)$/);
  if (!m) return null;
  const [, prefix, num, suffix] = m;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num.replace(/,/g, "")), decimals, suffix, commas: num.includes(",") };
}

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function CountUp({ value, duration = 1600, className = "" }) {
  const parts = parse(value);
  const ref = useRef(null);
  const [display, setDisplay] = useState(parts ? format(parts, 0) : value);

  useEffect(() => {
    if (!parts) return;
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          setDisplay(t === 1 ? value : format(parts, parts.target * easeOutExpo(t)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // value is a static string from content.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true" className="tabular-nums">
        {display}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}

function format({ prefix, decimals, suffix, commas }, n) {
  const fixed = n.toFixed(decimals);
  const out = commas ? Number(fixed).toLocaleString("en-US", { minimumFractionDigits: decimals }) : fixed;
  return `${prefix}${out}${suffix}`;
}

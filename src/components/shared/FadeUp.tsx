import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import { REVIEW_SCREENSHOTS } from "@/components/shared/data";

export function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "var(--beige-dark)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <span className="font-body font-medium text-base" style={{ color: "var(--text-main)" }}>{q}</span>
        <span
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", color: "var(--olive)" }}
        >
          <Icon name="Plus" size={20} />
        </span>
      </div>
      {open && (
        <div className="pb-5 font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {a}
        </div>
      )}
    </div>
  );
}

export function ReviewSlider() {
  const [current, setCurrent] = useState(0);
  const total = REVIEW_SCREENSHOTS.length;

  return (
    <div className="relative">
      <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "var(--cream)" }}>
        <img
          src={REVIEW_SCREENSHOTS[current].src}
          alt={`Отзыв ${current + 1}`}
          className="w-full object-contain"
          style={{ maxHeight: "600px" }}
        />
      </div>
      <div className="flex items-center justify-between mt-5">
        <button
          onClick={() => setCurrent((current - 1 + total) % total)}
          className="flex items-center justify-center w-11 h-11 rounded-full transition-all hover:-translate-x-0.5"
          style={{ backgroundColor: "var(--cream)", border: "1px solid var(--beige-dark)", color: "var(--olive)" }}
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        <div className="flex gap-2">
          {REVIEW_SCREENSHOTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === current ? "var(--olive)" : "var(--beige-dark)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((current + 1) % total)}
          className="flex items-center justify-center w-11 h-11 rounded-full transition-all hover:translate-x-0.5"
          style={{ backgroundColor: "var(--cream)", border: "1px solid var(--beige-dark)", color: "var(--olive)" }}
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
    </div>
  );
}

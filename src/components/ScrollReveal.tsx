import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ children, direction = "up", delay = 0, className = "" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animClass = {
    up: "animate-fade-up",
    left: "animate-slide-left",
    right: "animate-slide-right",
    fade: "animate-fade-in",
  }[direction];

  return (
    <div
      ref={ref}
      className={`${visible ? animClass : "opacity-0"} ${className}`}
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

"use client";

import { useIntersectionObserver } from "@/hooks";
import { cn } from "@/lib/utils";
import {
  type ReactNode,
  type CSSProperties,
  useEffect,
  useState,
  useRef,
  useSyncExternalStore,
} from "react";

// Custom hook for mobile detection using useSyncExternalStore
function useIsMobile() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerWidth < 768,
    () => false // SSR fallback
  );
}

// Custom hook for reduced motion preference
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false // SSR fallback
  );
}

type AnimationType =
  | "fade-up"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "scale-up"
  | "slide-up"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "flip-up"
  | "bounce-in"
  | "blur-in"
  | "rotate-in"
  | "swing-in"
  | "drop-in"
  | "rise-up"
  | "none"; // For mobile when we want no animation

type EasingType = "spring" | "smooth" | "bounce" | "elastic" | "snappy";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  mobileAnimation?: AnimationType;
  staggerIndex?: number;
  staggerDelay?: number;
  easing?: EasingType;
  once?: boolean;
  mobileDisabled?: boolean;
}

const easingCurves: Record<EasingType, string> = {
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  elastic: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  snappy: "cubic-bezier(0.16, 1, 0.3, 1)",
};

// Mobile-optimized easing - smoother, less bouncy
const mobileEasingCurves: Record<EasingType, string> = {
  spring: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  bounce: "cubic-bezier(0.34, 1.2, 0.64, 1)",
  elastic: "cubic-bezier(0.34, 1.3, 0.64, 1)",
  snappy: "cubic-bezier(0.25, 0.1, 0.25, 1)",
};

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  mobileAnimation,
  staggerIndex = 0,
  staggerDelay = 100,
  easing = "spring",
  once = true,
  mobileDisabled = false,
}: AnimateOnScrollProps) {
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, isInView } = useIntersectionObserver<HTMLDivElement>({
    threshold: isMobile ? 0.1 : threshold, // Lower threshold on mobile
    triggerOnce: once,
  });

  // If reduced motion or mobile disabled, show content immediately
  if (prefersReducedMotion || (isMobile && mobileDisabled)) {
    return <div className={cn(className)}>{children}</div>;
  }

  const activeAnimation =
    isMobile && mobileAnimation ? mobileAnimation : animation;

  // Mobile optimizations
  const mobileStaggerDelay = Math.min(staggerDelay, 60); // Faster stagger on mobile
  const totalDelay = isMobile
    ? Math.min(delay, 100) + staggerIndex * mobileStaggerDelay
    : delay + staggerIndex * staggerDelay;

  // Much faster on mobile for snappier feel
  const activeDuration = isMobile ? Math.min(duration, 400) : duration;
  const activeEasing = isMobile
    ? mobileEasingCurves[easing]
    : easingCurves[easing];

  const getAnimationStyles = (): CSSProperties => {
    const base: CSSProperties = {
      transitionProperty: "opacity, transform, filter",
      transitionDuration: `${activeDuration}ms`,
      transitionTimingFunction: activeEasing,
      transitionDelay: `${totalDelay}ms`,
      willChange: isInView ? "auto" : "opacity, transform",
    };

    if (!isInView) {
      const offsetMultiplier = isMobile ? 0.5 : 1;

      switch (activeAnimation) {
        case "none":
          return { ...base, opacity: 1 };
        case "fade-up":
          return {
            ...base,
            opacity: 0,
            transform: `translateY(${20 * offsetMultiplier}px)`,
          };
        case "fade-in":
          return { ...base, opacity: 0 };
        case "fade-left":
          return {
            ...base,
            opacity: 0,
            transform: `translateX(${-20 * offsetMultiplier}px)`,
          };
        case "fade-right":
          return {
            ...base,
            opacity: 0,
            transform: `translateX(${20 * offsetMultiplier}px)`,
          };
        case "scale":
          return {
            ...base,
            opacity: 0,
            transform: isMobile ? "scale(0.95)" : "scale(0.85)",
          };
        case "scale-up":
          return {
            ...base,
            opacity: 0,
            transform: isMobile
              ? "scale(0.9) translateY(15px)"
              : "scale(0.75) translateY(30px)",
          };
        case "slide-up":
          return {
            ...base,
            opacity: 0,
            transform: `translateY(${30 * offsetMultiplier}px)`,
          };
        case "slide-left":
          return {
            ...base,
            opacity: 0,
            transform: `translateX(${-30 * offsetMultiplier}px)`,
          };
        case "slide-right":
          return {
            ...base,
            opacity: 0,
            transform: `translateX(${30 * offsetMultiplier}px)`,
          };
        case "zoom-in":
          return {
            ...base,
            opacity: 0,
            transform: isMobile ? "scale(0.8)" : "scale(0.5)",
          };
        case "flip-up":
          return {
            ...base,
            opacity: 0,
            transform: isMobile
              ? "translateY(20px)" // Simplified for mobile - no 3D
              : "perspective(1200px) rotateX(15deg) translateY(40px)",
          };
        case "bounce-in":
          return {
            ...base,
            opacity: 0,
            transform: isMobile
              ? "scale(0.8) translateY(20px)"
              : "scale(0.3) translateY(60px)",
            transitionTimingFunction: isMobile
              ? mobileEasingCurves.bounce
              : easingCurves.bounce,
          };
        case "blur-in":
          return {
            ...base,
            opacity: 0,
            filter: isMobile ? "blur(6px)" : "blur(12px)",
            transform: `translateY(${15 * offsetMultiplier}px) scale(${isMobile ? 0.98 : 0.98})`,
          };
        case "rotate-in":
          return {
            ...base,
            opacity: 0,
            transform: isMobile
              ? "translateY(15px) scale(0.98)" // Simplified for mobile
              : "rotate(-5deg) translateY(30px) scale(0.95)",
          };
        case "swing-in":
          return {
            ...base,
            opacity: 0,
            transform: isMobile
              ? "translateX(-15px)" // Simplified for mobile - no 3D
              : "perspective(800px) rotateY(-15deg) translateX(-30px)",
          };
        case "drop-in":
          return {
            ...base,
            opacity: 0,
            transform: isMobile
              ? "translateY(-20px)"
              : "translateY(-50px) scale(0.9)",
            transitionTimingFunction: isMobile
              ? mobileEasingCurves.bounce
              : easingCurves.bounce,
          };
        case "rise-up":
          return {
            ...base,
            opacity: 0,
            transform: `translateY(${40 * offsetMultiplier}px)`,
            transitionTimingFunction: isMobile
              ? mobileEasingCurves.elastic
              : easingCurves.elastic,
          };
        default:
          return { ...base, opacity: 0 };
      }
    }

    return {
      ...base,
      opacity: 1,
      transform:
        "translateY(0) translateX(0) scale(1) rotate(0) rotateX(0) rotateY(0)",
      filter: "blur(0)",
    };
  };

  return (
    <div ref={ref} className={cn(className)} style={getAnimationStyles()}>
      {children}
    </div>
  );
}

// Floating animation - disabled on mobile for performance
interface FloatingProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  disableOnMobile?: boolean;
}

export function Floating({
  children,
  className,
  amplitude = 10,
  duration = 3,
  delay = 0,
  disableOnMobile = true,
}: FloatingProps) {
  const isMobile = useIsMobile();

  // Disable floating on mobile for performance
  if (isMobile && disableOnMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={cn("animate-floating", className)}
      style={
        {
          "--float-amplitude": `${amplitude}px`,
          "--float-duration": `${duration}s`,
          animationDelay: `${delay}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

// Pulse glow animation - subtle on mobile
interface PulseGlowProps {
  children: ReactNode;
  className?: string;
  color?: string;
  disableOnMobile?: boolean;
}

export function PulseGlow({
  children,
  className,
  color = "#38BDF8",
  disableOnMobile = false,
}: PulseGlowProps) {
  const isMobile = useIsMobile();

  if (isMobile && disableOnMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={cn(
        isMobile ? "" : "animate-pulse-glow",
        "relative",
        className
      )}
      style={{ "--glow-color": color } as CSSProperties}
    >
      {children}
    </div>
  );
}

// Text reveal animation
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  by?: "word" | "character";
  animation?: "fade-up" | "blur-in" | "scale";
}

export function TextReveal({
  children,
  className,
  delay = 0,
  staggerDelay = 50,
  by = "word",
  animation = "fade-up",
}: TextRevealProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simplified on mobile - just fade in the whole text
  if (isMobile) {
    return (
      <span
        ref={containerRef}
        className={cn("inline transition-opacity duration-400", className)}
        style={{ opacity: isInView ? 1 : 0 }}
      >
        {children}
      </span>
    );
  }

  const units = by === "word" ? children.split(" ") : children.split("");
  const separator = by === "word" ? "\u00A0" : "";

  const getUnitStyle = (index: number): CSSProperties => {
    const base: CSSProperties = {
      display: "inline-block",
      transitionProperty: "opacity, transform, filter",
      transitionDuration: "400ms",
      transitionTimingFunction: easingCurves.smooth,
      transitionDelay: `${delay + index * staggerDelay}ms`,
    };

    if (!isInView) {
      switch (animation) {
        case "fade-up":
          return { ...base, opacity: 0, transform: "translateY(15px)" };
        case "blur-in":
          return { ...base, opacity: 0, filter: "blur(6px)" };
        case "scale":
          return { ...base, opacity: 0, transform: "scale(0.85)" };
        default:
          return { ...base, opacity: 0 };
      }
    }

    return {
      ...base,
      opacity: 1,
      transform: "translateY(0) scale(1)",
      filter: "blur(0)",
    };
  };

  return (
    <span ref={containerRef} className={cn("inline", className)}>
      {units.map((unit, index) => (
        <span key={index} style={getUnitStyle(index)}>
          {unit}
          {index < units.length - 1 && separator}
        </span>
      ))}
    </span>
  );
}

// Parallax scroll effect - disabled on mobile
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
  disableOnMobile?: boolean;
}

export function Parallax({
  children,
  className,
  speed = 0.5,
  direction = "up",
  disableOnMobile = true,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Disable parallax on mobile for performance
    if (isMobile && disableOnMobile) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      const multiplier = direction === "up" ? -1 : 1;
      setOffset(distanceFromCenter * speed * multiplier * 0.1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction, isMobile, disableOnMobile]);

  // No parallax on mobile
  if (isMobile && disableOnMobile) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s linear",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

// Counter animation
interface CounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function Counter({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    // Faster animation on mobile
    const mobileDuration = isMobile ? Math.min(duration, 1200) : duration;
    const mobileDelay = isMobile ? Math.min(delay, 200) : delay;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / mobileDuration, 1);
        const eased = 1 - (1 - progress) * (1 - progress);
        setCount(Math.round(eased * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, mobileDelay);

    return () => clearTimeout(timeout);
  }, [hasStarted, end, duration, delay, isMobile]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// Touch feedback component for mobile
interface TouchFeedbackProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function TouchFeedback({
  children,
  className,
  scale = 0.97,
}: TouchFeedbackProps) {
  return (
    <div
      className={cn(
        "transition-transform duration-150 active:scale-[var(--touch-scale)]",
        className
      )}
      style={{ "--touch-scale": scale } as CSSProperties}
    >
      {children}
    </div>
  );
}

// Stagger container with mobile optimizations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: AnimationType;
  mobileAnimation?: AnimationType;
  easing?: EasingType;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 80,
  animation = "fade-up",
  mobileAnimation = "fade-in", // Default to simpler animation on mobile
  easing = "spring",
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <AnimateOnScroll
              key={index}
              animation={animation}
              mobileAnimation={mobileAnimation}
              staggerIndex={index}
              staggerDelay={staggerDelay}
              easing={easing}
            >
              {child}
            </AnimateOnScroll>
          ))
        : children}
    </div>
  );
}

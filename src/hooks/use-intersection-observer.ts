"use client";

import { useEffect, useRef, useState, useMemo } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const hasTriggeredRef = useRef(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Si el usuario prefiere reducir movimiento, mostrar inmediatamente
    if (prefersReducedMotion) {
      // Use requestAnimationFrame to avoid synchronous setState
      requestAnimationFrame(() => {
        setIsInView(true);
        hasTriggeredRef.current = true;
      });
      return;
    }

    // Si ya se activó y solo debe activarse una vez
    if (triggerOnce && hasTriggeredRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          hasTriggeredRef.current = true;
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, prefersReducedMotion]);

  return { ref, isInView };
}

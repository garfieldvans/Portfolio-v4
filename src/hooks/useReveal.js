import { useLayoutEffect } from "react";

const REVEAL_CLASS = "reveal-ready";
const VISIBLE_CLASS = "is-revealed";

const useReveal = () => {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const supportsObserver = "IntersectionObserver" in window;
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    if (prefersReducedMotion || !supportsObserver) {
      elements.forEach((element) => element.classList.add(VISIBLE_CLASS));
      return;
    }

    document.documentElement.classList.add(REVEAL_CLASS);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(VISIBLE_CLASS);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -48px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove(REVEAL_CLASS);
    };
  }, []);
};

export default useReveal;

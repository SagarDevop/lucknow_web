/**
 * Ambient Engineers - Native Scroll Trigger Engine
 * Uses high-performance native IntersectionObserver (zero scroll-jacking, zero FPS drops)
 */

export function initScrollTriggers() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};

  const targets = document.querySelectorAll(
    '.cad-project-strip-item, .cad-param-strip-card, .cad-process-strip-step, .cad-system-strip-row, .cad-project-card, .cad-spec-header, .cad-ribbon-intro-bar, .cad-heading-left'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -60px 0px', // Fires when element is 60px inside viewport
      threshold: 0.1,
    }
  );

  targets.forEach((el) => {
    el.classList.add('cad-scroll-trigger');
    observer.observe(el);
  });

  return () => {
    targets.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };
}

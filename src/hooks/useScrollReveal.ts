import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // 1. Intersection Observer for Scroll Reveals
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    });

    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale');
    revealElements.forEach((el) => observer.observe(el));

    // 2. Window Scroll Progress Line
    const progressBar = document.getElementById('scroll-progress-line');
    const handleScroll = () => {
      if (!progressBar) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / (docHeight || 1)) * 100;
      progressBar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

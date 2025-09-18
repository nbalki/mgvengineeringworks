import { useState, useRef, useEffect } from 'react';

/**
 * A custom hook to apply fade-in and slide-up animation when an element scrolls into view.
 * It uses the Intersection Observer API for performance.
 * @returns A ref to attach to the element and a string of Tailwind CSS classes for the animation.
 */
export const useFadeInOnScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animate only once when the element becomes visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(element);

    return () => {
      // Cleanup the observer on component unmount
      observer.disconnect();
    };
  }, []);

  const animationClasses = `transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  return { ref, animationClasses };
};

import { useState, useEffect, useRef, useCallback } from "react";
import { debounce } from "lodash";

const useImageOnIntersection = (threshold = 0.1) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  useEffect(() => {
    const debouncedHandleIntersection = debounce(([entry], observer) => {
      if (entry.isIntersecting) {
        observer.disconnect();
      }
    }, 100);

    const observer = new IntersectionObserver(debouncedHandleIntersection, {
      threshold,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      debouncedHandleIntersection.cancel();
    };
  }, [threshold]);

  return { isImageLoaded, sectionRef, handleImageLoad };
};

export default useImageOnIntersection;

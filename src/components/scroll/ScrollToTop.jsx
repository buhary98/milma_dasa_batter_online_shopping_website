import React, { useState, useEffect, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const ScrollToTop = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(
    debounce(() => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
    }, 100), // Adjust the debounce delay to balance performance and responsiveness
    []
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-button"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <FaArrowUp className="arrow-icon" />
        </button>
      )}
    </>
  );
});

export default ScrollToTop;

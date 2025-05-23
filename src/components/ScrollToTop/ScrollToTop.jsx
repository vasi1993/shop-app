import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Move focus to main content for screen readers
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  }, [location.pathname]);

  return null;
}

export default ScrollToTop;

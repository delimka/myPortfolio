import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Function for scrolling to elements located in other routes

const useScrollToElement = (elementId: string) => {
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo === elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block:"start"
        });
        navigate(window.location.pathname);
      }
      
    }
  }, [search]);
};

export default useScrollToElement;

import React from "react";
import PropTypes from "prop-types";

function SmoothScrollLink({ target, children }) {
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor link
    if (target === "top") {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      smoothScrollTo(target);
    }
  };

  return (
    <a href={`#${target}`} onClick={handleClick}>
      {/* children = the content between the opening and closing tags ie text "Section 1" or "Section 2" */}
      {children}
    </a>
  );
}

SmoothScrollLink.propTypes = {
  target: PropTypes.string,
};
SmoothScrollLink.propTypes = {
  children: PropTypes.string,
};

export default SmoothScrollLink;

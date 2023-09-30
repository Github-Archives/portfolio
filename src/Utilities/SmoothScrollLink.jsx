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
    smoothScrollTo(target); // Scroll to the target section
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

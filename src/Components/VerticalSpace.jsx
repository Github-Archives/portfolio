import React from "react";
import PropTypes from "prop-types";

const VerticalSpace = ({ height }) => {
  const style = {
    height: height || "20px", // You can set a default height or pass it as a prop
  };

  return <div style={style}></div>;
};

VerticalSpace.propTypes = {
  height: PropTypes.string,
};

export default VerticalSpace;

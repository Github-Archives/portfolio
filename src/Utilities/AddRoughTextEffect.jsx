import React from "react";
import PropTypes from "prop-types";
import { RoughNotation } from "react-rough-notation";

const AddRoughTextEffect = ({ text, highlightWords, type, color }) => {
  // Split the text into an array of words
  // Ensure text is a string and split it into an array of words
  const words = typeof text === "string" ? text.split(" ") : [];

  // Map through each word and apply the RoughNotation to the highlighted ones
  const highlightedText = words.map((word, index) => {
    if (highlightWords.includes(word)) {
      return (
        <RoughNotation key={index} type={type} color={color}>
          {word + " "}
        </RoughNotation>
      );
    }
    return <span key={index}>{word + " "}</span>;
  });
  return <p>{highlightedText}</p>;
};

AddRoughTextEffect.propTypes = {
  text: PropTypes.string,
};
AddRoughTextEffect.propTypes = {
  highlightWords: PropTypes.object,
};
AddRoughTextEffect.propTypes = {
  type: PropTypes.string,
};
AddRoughTextEffect.propTypes = {
  color: PropTypes.string,
};

export default AddRoughTextEffect;

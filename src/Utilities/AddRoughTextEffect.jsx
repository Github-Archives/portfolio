import PropTypes from 'prop-types'
import { RoughNotation } from 'react-rough-notation'

const AddRoughTextEffect = ({ text, highlightWords, type, color }) => {
  // Split the text into an array of words
  // Ensure text is a string and split it into an array of words
  const words = typeof text === 'string' ? text.split(' ') : []

  // Map through each word and apply the RoughNotation to the highlighted ones
  const highlightedText = words.map((word, index) => {
    const key = `${word}-${index}` // Combining word and index for a unique key
    if (highlightWords.includes(word)) {
      return (
        <RoughNotation key={key} type={type} color={color}>
          {word + ' '}
        </RoughNotation>
      )
    }
    return <span key={key}>{word + ' '}</span>
  })
  return <p>{highlightedText}</p>
}

AddRoughTextEffect.propTypes = {
  text: PropTypes.string,
  highlightWords: PropTypes.arrayOf(PropTypes.string), // Assuming highlightWords is an array of strings
  type: PropTypes.string,
  color: PropTypes.string,
}

export default AddRoughTextEffect

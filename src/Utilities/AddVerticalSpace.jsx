import PropTypes from 'prop-types'

const AddVerticalSpace = ({ height }) => {
  const style = {
    height: height || '20px', // You can set a default height or pass it as a prop
  }

  return <div style={style}></div>
}

AddVerticalSpace.propTypes = {
  height: PropTypes.string,
}

export default AddVerticalSpace

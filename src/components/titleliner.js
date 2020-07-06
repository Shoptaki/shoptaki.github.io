import PropTypes from "prop-types"
import React from "react"
import underlinerBlue from "../images/underliner-blue.svg"
import underlinerOrange from "../images/underliner-orange.svg"

const TitleLiner = ({ color, size }) => (
  <img
    width={size}
    src={color === "orange" ? underlinerOrange : underlinerBlue}
    alt="underline"
  />
)

TitleLiner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}

TitleLiner.defaultProps = {
  color: `blue`,
  size: `300px`,
}

export default TitleLiner

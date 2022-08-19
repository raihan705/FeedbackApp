import React from "react";
import PropTypes from "prop-types";

export default function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "submit",
  version: "primary",
  isDisabled: false,
};

Button.propTypes = {
  childern: PropTypes.node,
  type: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { text, bgColor } = props;
  const style = {
    backgroundColor: bgColor,
  };
  return (
    <header style={style}>
      <div className="container" style={{ border: "1px solid magenta" }}>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "orange",
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;

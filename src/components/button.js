import React, { useState } from "react";

const Button = ({ onClick, color = "#004346", children }) => {
  const [clicked, setClicked] = useState(false);

  const defaultStyle = {
    background: color,
    height: "100px",
    width: "200px",
    color: "#EEEFA8",
    transition: "all 3s ease-out"
  };

  const clickedStyle = {
    background: "#EEEFA8",
    height: "200px",
    width: "200px",
    color,
    transition: "all 3s ease-out"
  };

  const handleClick = event => {
    setClicked(!clicked);
    if (onClick) {
      onClick(event);
    }
  };

  // Render
  return (
    <button onClick={handleClick} style={clicked ? clickedStyle : defaultStyle}>
      {children}
    </button>
  );
};

export default Button;

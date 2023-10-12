import React from "react";
import "../css/elements/elements.css";

interface Props {
  backgroundColor: string;
  color: string;
  text: string;
}
const CurvedButton: React.FC<Props> = ({ backgroundColor, color, text }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {text}
    </button>
  );
};

export default CurvedButton;

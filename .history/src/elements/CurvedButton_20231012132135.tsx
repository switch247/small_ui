import React from "react";
import "../css/elements/elements.css";

interface Props {
  backgroundColor?: string;
  text: string;
  color?: string;
  fontSize?: number;
}
const CurvedButton: React.FC<Props> = ({ backgroundColor, color, text }) => {
  return (
    <div
      className="curved__button"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {text}
    </div>
  );
};

export default CurvedButton;

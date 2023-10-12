import React from "react";

interface Props {
  borderColor?: string;
  text: string;
  color?: string;
  fontSize?: number;
}
const BorderdButton: React.FC<Props> = ({
  text,
  color,
  borderColor,
  fontSize,
}) => {
  return (
    <div
      className="borderd__button"
      style={{ color: color, borderColor: borderColor, fontSize: fontSize }}
    >
      {text}
    </div>
  );
};

export default BorderdButton;

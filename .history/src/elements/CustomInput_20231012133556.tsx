import React from "react";
import "../css/elements/elements.css";

interface Props {
  placeholder?: string;
  color?: string;
  placholderColor?: string;
  fontSize?: number;
}
const CustomInput: React.FC<Props> = ({
  color,
  placeholder,
  placholderColor,
}) => {
  return <input type="text" placeholder={placeholder} />;
};

export default CustomInput;

import React from "react";
import "../css/elements/elements.css";

interface Props {
  text: string;
  placeholder?: string;
  color?: string;
  placholderColor?: string;
}
const CustomInput: React.FC<Props> = () => {
  return <input type="text" />;
};

export default CustomInput;

import React from "react";

interface Props {
  number: number;
  desc: string;
}
const NumberCard: React.FC<Props> = ({ number, desc }) => {
  return (
    <div className="number__container">
      <div className="number">{number}</div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default NumberCard;

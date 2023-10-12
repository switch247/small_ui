import { useState } from "react";
import TableView from "./Table";
import "../css/components/Description.css";

const Description = () => {
  const [dropDownState, setDropDownState] = useState(true);
  let img_src = dropDownState ? "/images/up.svg" : "/images/down.svg";
  return (
    <div className="description__container">
      <div className="description__title_img">
        <img src="/images/🦆 icon _document text_.svg" alt="" />
        <div className="description__title">Find the right visa for you!</div>
      </div>
      <div className="description__dropdowns">
        <div className="dropdown">
          <div
            className="dropdown__clickable"
            onClick={() => {
              setDropDownState((dropDownState) => !dropDownState);
            }}
          >
            <div className="dropdown__title">Diversity Visa Cost</div>
            <img className="dropdown__img" src={img_src} alt="" />
          </div>
          {dropDownState ? <TableView /> : null}
        </div>
        <div className="dropdown">
          <div className="dropdown__clickable">
            <div className="dropdown__title">Diversity Visa Cost</div>
            <img className="dropdown__img" src={img_src} alt="" />
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown__clickable">
            <div className="dropdown__title">Diversity Visa Cost</div>
            <img className="dropdown__img" src={img_src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

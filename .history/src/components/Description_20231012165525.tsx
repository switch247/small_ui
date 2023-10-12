import { useState } from "react";
import TableView from "./Table";

const Description = () => {
  const [dropDownState, setDropDownState] = useState(false);
  let img_src = dropDownState ? "/images/up.svg" : "/images/down.svg";
  return (
    <div className="description__container">
      <div className="description__title"></div>;
      <div className="description__dropdowns">
        <div className="dropdown">
          <div
            className="dropdown__clickable"
            onClick={() => {
              setDropDownState((dropDownState) => !dropDownState);
            }}
          >
            <div className="dropdown__title">Diversity Visa Cost</div>
            <img src={img_src} alt="" />
          </div>
          {dropDownState ? <TableView /> : null}
        </div>
      </div>
    </div>
  );
};

export default Description;

import React from "react";
import "../css/components/Table.css";
import CurvedButton from "../elements/CurvedButton";

interface Props {}

const TableView: React.FC<Props> = () => {
  return (
    <div>
      <div className="tableview__header">
        <div className="left__coint"></div>
        <div className="tableview__title"></div>
        <CurvedButton
          text="Apply now"
          color="white"
          backgroundColor="#fd806b"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableView;

import React from "react";
import "../css/components/Table.css";
import CurvedButton from "../elements/CurvedButton";

interface Props {}

const TableView: React.FC<Props> = () => {
  return (
    <div className="tableview__container">
      <div className="tableview__header">
        <div className="left__coint"></div>
        <div className="tableview__title">
          Mandatory Government Fees for Green Cards
        </div>
        <div className="tableview__curved__btn">
          <CurvedButton
            text="Apply now"
            color="white"
            backgroundColor="#fd806b"
            fontSize={24}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Fee Type</th>
            <th>Cost (to Applicat Living in the U.S.)</th>
            <th>Cost (to Applicant Living Abroad)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Family Sponsorship Form (I-130)</td>
            <td>$535</td>
            <td>$535</td>
          </tr>
          <tr>
            <td>Green Card Application Form (I-485)</td>
            <td>$1140</td>
            <td>Not required</td>
          </tr>
          <tr>
            <td>Green Card Application Form (I-485)</td>
            <td>$1140</td>
            <td>Not required</td>
          </tr>
          <tr>
            <td>Green Card Application Form (I-485)</td>
            <td>$1140</td>
            <td>Not required</td>
          </tr>
          <tr>
            <td>Green Card Application Form (I-485)</td>
            <td>$1140</td>
            <td>Not required</td>
          </tr>
          <tr>
            <td>Green Card Application Form (I-485)</td>
            <td>$1140</td>
            <td>Not required</td>
          </tr>
          <tr>
            <td>Green Card Application Form (I-485)</td>
            <td>$1140</td>
            <td>Not required</td>
          </tr>
          <tr>
            <td>Green Card Application Form (I-485)</td>
            <td>$1140</td>
            <td>Not required</td>
          </tr>
          <tr>
            <td className="footer">Total</td>
            <td className="footer">$1760</td>
            <td className="footer">$1200</td>
          </tr>
        </tbody>
      </table>
      <div className="table__footer__note">
        Fees are subject to change, please use this calculator
      </div>
    </div>
  );
};

export default TableView;

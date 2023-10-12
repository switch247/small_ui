import CustomInput from "../elements/CustomInput";
import "../css/components/GreenCard.css";

const GreenCard = () => {
  return (
    <div className="card__container">
      <div className="small__title">
        <img className="arrow_image" src="/images/right_arrow.svg" alt="" />
        <div className="small_title_1">check now for free</div>
      </div>
      <div className="main__title">Green Card Eligiblity</div>
      <div className="card__name">
        <CustomInput placeholder="First Name" />
        <CustomInput placeholder="Last Name" />
      </div>
      <div className="card__email">
        <CustomInput placeholder="Email Address" />
        <CustomInput placeholder="Your email" />
      </div>
      <div className="card__country">
        <CustomInput placeholder="Your country of birth" />
      </div>
      <div className="card__marital"></div>
      <div className="card_check">
        <input type="checkbox" />
        <div>Yes, I finished high school OR I have qualifying training.</div>
      </div>
    </div>
  );
};

export default GreenCard;

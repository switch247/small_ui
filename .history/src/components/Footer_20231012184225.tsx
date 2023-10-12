import "../css/components/Footer.css";

const Footer = () => {
  return (
    <div className="footer__footer__container">
      <div className="footer__footer__header">
        <img className="gov_assist_logo" src="/images/Govassist.png" alt="" />
        <ul className="list">
          <li className="__list">Terms of Service</li>
          <li className="__list">Privacy Policy</li>
          <li className="__list">Legal Disclaimer</li>
          <li className="__list">Refund Policy</li>
          <li className="__list">Terms of Use</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

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
      <div>
        Disclaimer: GovAssist is not affiliated with any United States
        government agency or department. Costs for consulting services do NOT
        include any government application, medical examination, filing, or
        biometric fees. This website does not provide legal advice and we are
        not a law firm. None of our customer service representatives are lawyers
        and they also do not provide legal advice. We are a private,
        internet-based travel and immigration consultancy provider dedicated to
        helping individuals travel to the United States. You may apply by
        yourself directly at travel.state.gov or at uscis.gov. GovAssist is
        affiliated with the UT law firm GovAssist Legal which provides legal
        services on immigration matters. Only licensed immigration professionals
        can provide advice, explanation, opinion, or recommendation about
        possible legal rights, remedies, defenses, options, selection of forms
        or strategies.
      </div>
    </div>
  );
};

export default Footer;

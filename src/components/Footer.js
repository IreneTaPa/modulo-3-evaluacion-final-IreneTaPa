import footerImg from '../images/rick.png';
import '../styles/layout/Footer.scss';

const Footer = () => {
  return (
    <div>
      <img
        className="footer footer__img"
        src={footerImg}
        alt="Rick and Morty"
      />
      <small className="small">Made with 💚 by Irene </small>
    </div>
  );
};

export default Footer;

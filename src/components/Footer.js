import footerImg from '../images/rick.png';
import '../styles/layout/Footer.scss';

const Footer = () => {
  return (
    <img className="footer footer__img" src={footerImg} alt="Rick and Morty" />
  );
};

export default Footer;

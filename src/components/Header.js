import Logo from '../images/logo.png';
import '../styles/Header.scss';

const Header = () => {
  return <img className="logo" src={Logo} alt="Logo from Rick & Morty" />;
};

export default Header;

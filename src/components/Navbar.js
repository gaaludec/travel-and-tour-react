import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';
import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav class="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="travel and tours" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <NavLinks />
        <SocialLinks />
      </div>
    </nav>
  );
};
export default Navbar;

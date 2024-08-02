import { navLinks } from '../data/links';

const NavLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
      {navLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className="nav-link">
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;

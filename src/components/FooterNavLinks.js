import { navLinks } from '../data/links';

const FooterNavLinks = () => {
  return (
    <ul className="footer-links">
      {navLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className="footer-link">
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterNavLinks;

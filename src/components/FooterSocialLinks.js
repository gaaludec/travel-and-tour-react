import { socialLinks } from '../data/links';

const FooterSocialMediaLinks = () => {
  return (
    <ul className="footer-icons">
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterSocialMediaLinks;

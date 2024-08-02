import FooterNavLinks from './FooterNavLinks';
import FooterSocialMediaLinks from './FooterSocialLinks';

const Footer = () => {
  return (
    <footer className="section footer">
      <FooterNavLinks />
      <FooterSocialMediaLinks />
      <>
        <p className="copyright">
          copyright &copy;<span id="date">{new Date().getFullYear()}</span>{' '}
          travel & tours company all rights reserved
        </p>
      </>
    </footer>
  );
};

export default Footer;

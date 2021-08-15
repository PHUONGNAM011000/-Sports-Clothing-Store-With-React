import logo from '../../assets/images/logo-white.png';
import PlayStore from '../../assets/images/play-store.png';
import AppStore from '../../assets/images/app-store.png';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and ios mobile phone.</p>
            <div className="app-logo">
              <img src={PlayStore} alt="play store" />
              <img src={AppStore} alt="app store" />
            </div>
          </div>
          <div className="footer-col-2">
            <img src={logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              architecto officia quaerat consequuntur iure vitae blanditiis quam
              vel libero sint.
            </p>
          </div>
          <div className="footer-col-3">
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="sopyright">Copyright 2021 - Easy Tutorials</p>
      </div>
    </div>
  );
};

export default Footer;

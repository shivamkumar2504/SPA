import instagramIcon from './instagram.png';
import facebookIcon from './facebook.png';
import twitterIcon from './logos.png';
import youtubeIcon from './play.png';
import googlePlayIcon from './bothappgoogle-removebg-preview.png';
import './footer.css';


export const Footer = () => {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h1 className="logo">Dine Reserve</h1>
            <p>Empowering restaurants, one table at a time</p>
            <p>Discover seamless dining with Eat App</p>
            <div className="social-icons">
              <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
              <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
              <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
            </div>
            <div className="app-links">
              <a href="#"><img src={googlePlayIcon} alt="Google Play" /></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Features</h3>
            <ul>
              <li>Reservation system</li>
              <li>Table management</li>
              <li>CRM and guest profiles</li>
              <li>Waitlist</li>
              <li>WhatsApp messaging</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
              <li>Terms of service</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>The 16 Best Reservation Systems</li>
              <li>Guide to Restaurant Marketing</li>
              <li>Guide to Customer Service</li>
              <li>Guide to Making a Restaurant Website</li>
              <li>All articles</li>
            </ul>
          </div>
        </div>
        <p className="copyright">© Dine Reserve. All rights reserved.</p>
      </footer>
    );
  };
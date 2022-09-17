import { Link } from "react-router-dom";
import  Logo  from "../images/logo.png";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import {  AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="Logo">
            <img src={Logo} alt="Footer Logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magnam laborum numquam, accusamus iste odio nisi libero nemo aliquid debitis!</p>
            <div className="footer__social">
               <a href="https://Linkdin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
               <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
               <a href="https://Twitter.com/" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
               <a href="https://Instagram.com/" target="_blank" rel="noreferrer noopener"><AiOutlineInstagram/></a>
            </div>
          </Link>
        </article>
        <article>
          <h4>Permalink</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Permalink</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
      </div>
      <div className="footer__copyright">
          <small>
               2022 Mahdi Nazari &copy; All Right Reversed
          </small>
      </div>
    </footer>
  );
};

export default Footer;

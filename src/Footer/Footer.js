import classes from "./Footer.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
      <footer className={classes.footer}>
        <div className={`${classes.footer__wrapper} max-content`}>
          <ul>
            <li>
              <a href="https://github.com/KrisZivojevic" target="_blank" rel="noreferrer">
                <FaGithub className={classes.footer__icon} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kristina-zivojevic/" target="_blank" rel="noreferrer">
                <FaLinkedin className={classes.footer__icon} />
              </a>
            </li>
            <li>
              <a href="mailto:kristina.zivojevic@gmail.com">
                <FaRegEnvelope className={classes.footer__icon} />
              </a>
            </li>
          </ul>
          <p>Handcrafted by Kristina Živojević</p>
          <p className={classes.footer__copyright}>&#169; Copyright 2023</p>
        </div>
      </footer>
  );
};

export default Footer;

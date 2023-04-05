import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul id="navigation" className={classes.nav__list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={classes.icon}>
            Cart <AiOutlineShoppingCart size="20px" />
          </NavLink>
        </li>
        <li className={`${classes.dropdown} ${classes.icon}`}>
            My Account <BsFillPersonFill size="20px" />
          <div className={classes.dropdown__content}>
            <ul>
              <li><NavLink to="/register">Sign Up</NavLink></li>
              <li><NavLink to="/login">Log In</NavLink></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

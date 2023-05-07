import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import classes from "./Navigation.module.css";
import Dropdown from "../Dropdown/Dropdown";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul id="navigation" className={classes.nav__list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={classes.icon}>
            Cart <AiOutlineShoppingCart size="20px" />
          </NavLink>
        </li>
        <li className={`${classes.dropdown} ${classes.icon}`}>
          My Account <BsFillPersonFill size="20px" />
          <div className={classes.dropdown__content}>
            <Dropdown />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

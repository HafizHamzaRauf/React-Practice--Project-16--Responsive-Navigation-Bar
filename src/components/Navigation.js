import { links, socialLinks } from "../staticdata";
import { FaBars } from "react-icons/fa";
import classes from "./Navigation.module.css";
import { useState } from "react";
function Navigation(props) {
  const [show, setIsShow] = useState(false);
  const showHandler = () => {
    setIsShow((prevState) => !prevState);
  };
  return (
    <nav className={classes["nav-container"]}>
      <h1 className={classes["primary-heading"]}>React Practice</h1>
      <a onClick={showHandler} className={classes["bar-btn"]}>
        <FaBars size={24} />
      </a>
      {show && (
        <ul className={`${classes.links} ${classes["project-links"]}`}>
          {links.map(({ text }, index) => (
            <li className={classes["list-item"]} key={index}>
              <a href="#">{text}</a>
            </li>
          ))}
        </ul>
      )}
      <ul className={`${classes["social-links"]} ${classes.links}`}>
        {socialLinks.map(({ url, icon }, index) => (
          <li key={index}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;

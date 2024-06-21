import { NavLink } from "react-router-dom";
import styles from "./styles/SidebarLink.module.css";

const SidebarLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles["navlink"]} ${isActive ? styles["active"] : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default SidebarLink;

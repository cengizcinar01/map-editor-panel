import { NavLink } from "react-router-dom";
import styles from "./styles/SidebarLink.module.css";

const SidebarLink = ({ to, children, icon: Icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles["navlink"]} ${isActive ? styles["active"] : ""}`
      }
    >
      {Icon && <Icon className={styles["icon"]} />}
      {children}
    </NavLink>
  );
};

export default SidebarLink;

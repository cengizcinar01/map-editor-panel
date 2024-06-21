import { NavLink } from "react-router-dom";
import styles from "./styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <ul className={styles["sidebar-menu"]}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-style"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Add Style
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;

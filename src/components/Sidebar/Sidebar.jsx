import { NavLink } from "react-router-dom";
import styles from "./styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <ul className={styles["sidebar-menu"]}>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/add-style">Add Style</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;

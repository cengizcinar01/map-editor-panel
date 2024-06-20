import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul>
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

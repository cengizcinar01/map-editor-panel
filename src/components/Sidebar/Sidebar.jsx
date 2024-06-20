import { useLogto } from "@logto/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isAuthenticated } = useLogto();

  if (isAuthenticated) {
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
  }
};

export default Sidebar;

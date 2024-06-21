import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <>
      <ul>
        <li>
          <SidebarLink to="/">Dashboard</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/add-style">Add Style</SidebarLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;

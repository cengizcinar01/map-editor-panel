import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <>
      <SidebarLink to="/">Dashboard</SidebarLink>
      <SidebarLink to="/add-style">Add Style</SidebarLink>
    </>
  );
};

export default Sidebar;

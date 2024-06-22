import { MdDashboard, MdDesignServices } from "react-icons/md";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <>
      <SidebarLink icon={MdDashboard} to="/">
        Dashboard
      </SidebarLink>
      <SidebarLink icon={MdDesignServices} to="/add-style">
        Add Style
      </SidebarLink>
    </>
  );
};

export default Sidebar;

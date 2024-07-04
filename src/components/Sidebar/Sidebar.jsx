import { MdDashboard, MdDesignServices, MdFavorite } from "react-icons/md";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <>
      <SidebarLink icon={MdDashboard} to="/">
        Dashboard
      </SidebarLink>
      <SidebarLink icon={MdFavorite} to="/add-favorite-place">
        Add Favorite Place
      </SidebarLink>
      <SidebarLink icon={MdDesignServices} to="/add-style">
        Add Style
      </SidebarLink>
    </>
  );
};

export default Sidebar;

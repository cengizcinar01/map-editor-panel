import { useLogto } from "@logto/react";
import styles from "./styles/Sidebar.module.css";

const Sidebar = () => {
  const { isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return (
      <>
        <div className={styles["sidebar-container"]}></div>
      </>
    );
  }
};

export default Sidebar;

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./styles/RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className={styles["main-container"]}>
        <div className={styles["sidebar-container"]}>
          <Sidebar />
        </div>
        <div className={styles["outlet-container"]}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;

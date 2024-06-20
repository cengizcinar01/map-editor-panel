import { Outlet } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./styles/RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className={styles["main-container"]}>
        <Sidebar />
        <Outlet />
      </div>
      <SignIn />
    </>
  );
};

export default RootLayout;

import { useLogto } from "@logto/react";
import SignOut from "../Auth/SignOut";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  const { isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return (
      <>
        <div className={styles["navbar-container"]}>
          <SignOut />
        </div>
      </>
    );
  }
};

export default Navbar;

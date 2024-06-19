import styles from "./styles/Navbar.module.css";
import SignOut from "../Auth/SignOut";

const Navbar = () => {
  return (
    <>
      <div className={styles["navbar-container"]}>
        <SignOut />
      </div>
    </>
  );
};

export default Navbar;

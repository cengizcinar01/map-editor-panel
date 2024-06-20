import { useLogto } from "@logto/react";
import styles from "./styles/SignIn.module.css";

const SignIn = () => {
  const { signIn, isAuthenticated, isLoading } = useLogto();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className={styles["sign-in-button-container"]}>
      <div className={styles["wrapper"]}>
        <img
          className={styles["logo"]}
          src="https://api.litehost.cc/assets/7acc0aec-f06d-4f5a-9800-53069b9de146"
          alt="Map Editor Project Logo"
        />
        <span>Access denied</span>
        <button
          className={styles["sign-in-button"]}
          onClick={() =>
            signIn(`${import.meta.env.VITE_LOGTO_REDIRECT_URL}/callback`)
          }
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;

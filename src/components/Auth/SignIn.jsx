import { useLogto } from "@logto/react";
import styles from "./styles/SignIn.module.css";

const SignIn = () => {
  const { signIn, isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className={styles["sign-in-button-container"]}>
      <div className={styles["wrapper"]}>
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

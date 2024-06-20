import { useLogto } from "@logto/react";
import styles from "./styles/SignOut.module.css";

const SignOut = () => {
  const { signOut } = useLogto();

  return (
    <button
      className={styles["sign-out-button"]}
      onClick={() => signOut(`${import.meta.env.VITE_LOGTO_REDIRECT_URL}`)}
    >
      Sign out
    </button>
  );
};

export default SignOut;

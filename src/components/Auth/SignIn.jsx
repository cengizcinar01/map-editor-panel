import { useLogto } from "@logto/react";
import mapEditorPanelLogo from "./assets/map-editor-panel-logo.png";
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
    <>
      <div className={styles["sign-in-button-container"]}>
        <div className={styles["wrapper"]}>
          <img
            className={styles["logo"]}
            src={mapEditorPanelLogo}
            alt="Map Editor Panel Logo"
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
    </>
  );
};

export default SignIn;

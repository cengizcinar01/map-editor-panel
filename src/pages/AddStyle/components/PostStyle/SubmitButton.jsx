import styles from "../styles/StyleForm.module.css";

const SubmitButton = ({ children }) => (
  <button type="submit" className={styles["button"]}>
    {children}
  </button>
);

export default SubmitButton;

import classNames from "classnames";
import styles from "../styles/StyleForm.module.css";

const FormGroup = ({ type, placeholder, register, className }) => (
  <div className={styles["form-group"]}>
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(styles["input"], className)}
      {...register}
    />
  </div>
);

export default FormGroup;

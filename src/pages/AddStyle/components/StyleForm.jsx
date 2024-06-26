import { useLogto } from "@logto/react";
import axios from "axios";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import styles from "./styles/StyleForm.module.css";

const StyleForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { getAccessToken, isAuthenticated } = useLogto();

  const onSubmit = async (data) => {
    if (!isAuthenticated) return;

    try {
      const accessToken = await getAccessToken(
        import.meta.env.VITE_LOGTO_RESOURCES
      );
      const formData = new FormData();
      formData.append("style_name", data.styleName);
      formData.append("style_url", data.styleUrl);
      formData.append("style_img", data.styleImg[0]);

      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/style/add-style`,
        formData,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      console.log("Style added successfully");
      reset();
    } catch (error) {
      console.error("Error adding style:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
        <div className={styles["form-group"]}>
          <input
            type="text"
            placeholder="Style name"
            className={styles["input"]}
            {...register("styleName", { required: true })}
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            type="text"
            placeholder="Style URL"
            className={classNames(styles["input"], styles["url"])}
            {...register("styleUrl", { required: true })}
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            type="file"
            accept="image/*"
            className={styles["file-input"]}
            {...register("styleImg", { required: true })}
          />
        </div>
        <button type="submit" className={styles["button"]}>
          Add Style
        </button>
      </form>
    </>
  );
};

export default StyleForm;

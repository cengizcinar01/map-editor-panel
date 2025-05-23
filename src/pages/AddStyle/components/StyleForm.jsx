import { useLogto } from "@logto/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import FormGroup from "./PostStyle/FormGroup";
import SubmitButton from "./PostStyle/SubmitButton";
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
    <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
      <FormGroup
        type="text"
        placeholder="Style name"
        register={register("styleName", { required: true })}
      />
      <FormGroup
        type="text"
        placeholder="Style URL"
        register={register("styleUrl", { required: true })}
        className={styles["url"]}
      />
      <FormGroup
        type="file"
        accept="image/*"
        register={register("styleImg", { required: true })}
        className={styles["file-input"]}
      />
      <SubmitButton>Add Style</SubmitButton>
    </form>
  );
};

export default StyleForm;

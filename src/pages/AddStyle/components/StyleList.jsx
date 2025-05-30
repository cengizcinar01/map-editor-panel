import { useLogto } from "@logto/react";
import axios from "axios";
import { useEffect, useState } from "react";
import deleteStyleConfirmation from "./DeleteStyle/DeleteStyleConfirmation";
import StyleItem from "./StyleItem";
import styles from "./styles/StyleList.module.css";

const StyleList = () => {
  const [getAllStyles, setGetAllStyles] = useState([]);
  const { getAccessToken, isAuthenticated } = useLogto();

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/style/get-style`
        );
        setGetAllStyles(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchStyles();
  }, []);

  const handleDeleteStyle = async (styleId) => {
    if (isAuthenticated) {
      deleteStyleConfirmation(
        styleId,
        getAccessToken,
        getAllStyles,
        setGetAllStyles
      );
    }
  };

  return (
    <div className={styles["style-list-container"]}>
      <div className={styles["style-list"]}>
        {getAllStyles.map((styleItem, index) => (
          <StyleItem
            key={index}
            styleItem={styleItem}
            onDelete={handleDeleteStyle}
          />
        ))}
      </div>
    </div>
  );
};
export default StyleList;

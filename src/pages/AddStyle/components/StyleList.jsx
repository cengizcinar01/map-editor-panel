import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles/StyleList.module.css";

const StyleList = () => {
  const [getAllStyles, setGetAllStyles] = useState([]);

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

  return (
    <>
      <div className={styles["style-list-container"]}>
        <div className={styles["style-list"]}>
          {getAllStyles.map((styleItem, index) => (
            <div key={index} className={styles["style-item"]}>
              <img
                src={`${import.meta.env.VITE_APP_ASSET_URL}/${
                  styleItem.style_img
                }`}
                alt={styleItem.style_name}
                className={styles["style-image"]}
              />
              <div className={styles["style-name"]}>{styleItem.style_name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StyleList;

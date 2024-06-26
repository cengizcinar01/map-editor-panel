import styles from "./styles/StyleItem.module.css";

const StyleItem = ({ styleItem, onDelete }) => {
  return (
    <div className={styles["style-item"]}>
      <img
        src={`${import.meta.env.VITE_APP_ASSET_URL}/${styleItem.style_img}`}
        alt={styleItem.style_name}
        className={styles["style-image"]}
      />
      <div className={styles["style-name"]}>{styleItem.style_name}</div>
      <button
        className={styles["delete-button"]}
        onClick={() => onDelete(styleItem.style_id)}
      >
        X
      </button>
    </div>
  );
};

export default StyleItem;

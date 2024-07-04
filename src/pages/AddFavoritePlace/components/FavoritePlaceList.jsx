import styles from "./styles/FavoritePlaceList.module.css";

const FavoritePlaceList = ({ places, onRemovePlace }) => {
  return (
    <ul className={styles.list}>
      {places.map((place, index) => (
        <li className={styles.item} key={index}>
          {place.name} - {place.country}
          <button
            className={styles.removeButton}
            onClick={() => onRemovePlace(place.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FavoritePlaceList;

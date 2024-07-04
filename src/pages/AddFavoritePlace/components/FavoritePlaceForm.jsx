import { useState } from "react";
import styles from "./styles/FavoritePlaceForm.module.css";

const FavoritePlaceForm = ({ onAddPlace }) => {
  const [newPlace, setNewPlace] = useState({
    name: "",
    country: "",
    flag: "",
    latitude: "",
    longitude: "",
  });

  const handleInputChange = (event) => {
    setNewPlace({ ...newPlace, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlace(newPlace);
    setNewPlace({
      name: "",
      country: "",
      flag: "",
      latitude: "",
      longitude: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {Object.entries(newPlace).map(([key, value]) => (
        <input
          className={styles.input}
          key={key}
          type="text"
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={value}
          onChange={handleInputChange}
        />
      ))}
      <button className={styles.button} type="submit">
        Add Place
      </button>
    </form>
  );
};

export default FavoritePlaceForm;

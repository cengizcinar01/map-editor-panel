import { useLogto } from "@logto/react";
import axios from "axios";
import { useEffect, useState } from "react";

const AddFavoritePlace = () => {
  const { getAccessToken, isAuthenticated } = useLogto();
  const [favoritePlaces, setFavoritePlaces] = useState([]);
  const [newPlace, setNewPlace] = useState({
    name: "",
    country: "",
    flag: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    fetchFavoritePlaces();
  }, []);

  const fetchFavoritePlaces = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/favorite/get-favorite-place`
      );
      setFavoritePlaces(response.data);
    } catch (error) {
      console.error("Error fetching favorite places:", error);
    }
  };

  const handleInputChange = (event) => {
    setNewPlace({ ...newPlace, [event.target.name]: event.target.value });
  };

  const handleAddPlace = async () => {
    const accessToken = await getAccessToken(
      `${import.meta.env.VITE_LOGTO_RESOURCES}`
    );
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/favorite/add-favorite-place`,
        newPlace,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setFavoritePlaces([...favoritePlaces, response.data]);
      setNewPlace({
        name: "",
        country: "",
        flag: "",
        latitude: "",
        longitude: "",
      });
      await fetchFavoritePlaces();
    } catch (error) {
      console.error("Error adding favorite place:", error);
    }
  };

  const handleRemovePlace = async (placeId) => {
    const accessToken = await getAccessToken(
      `${import.meta.env.VITE_LOGTO_RESOURCES}`
    );
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_APP_API_URL
        }/favorite/delete-favorite-place/${placeId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setFavoritePlaces(favoritePlaces.filter((place) => place.id !== placeId));
    } catch (error) {
      console.error("Error removing favorite place:", error);
    }
  };

  if (!isAuthenticated) {
    return <div>Please log in to manage favorite places.</div>;
  }

  return (
    <div>
      <h2>Add Favorite Place</h2>
      <div>
        {Object.entries(newPlace).map(([key, value]) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={value}
            onChange={handleInputChange}
          />
        ))}
        <button onClick={handleAddPlace}>Add Place</button>
      </div>
      <h2>Favorite Places</h2>
      <ul>
        {favoritePlaces.map((place) => (
          <li key={place.id}>
            {place.name} - {place.country}
            <button onClick={() => handleRemovePlace(place.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddFavoritePlace;

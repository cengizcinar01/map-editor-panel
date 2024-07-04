import { useLogto } from "@logto/react";
import axios from "axios";
import { useEffect, useState } from "react";

const AddFavoritePlace = () => {
  const [favoritePlaces, setFavoritePlaces] = useState([]);
  const [newPlace, setNewPlace] = useState({
    name: "",
    country: "",
    flag: "",
    latitude: "",
    longitude: "",
  });

  const { getAccessToken, isAuthenticated } = useLogto();

  useEffect(() => {
    const fetchFavoritePlaces = async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessToken(
          `${import.meta.env.VITE_LOGTO_RESOURCES}`
        );
        try {
          const response = await axios.get(
            "http://localhost:5000/favorite/get-favorite-place",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setFavoritePlaces(response.data);
        } catch (error) {
          console.error("Error fetching favorite places:", error);
        }
      }
    };

    fetchFavoritePlaces();
  }, [isAuthenticated, getAccessToken]);

  const handleInputChange = (event) => {
    setNewPlace({ ...newPlace, [event.target.name]: event.target.value });
  };

  const handleAddPlace = async () => {
    if (isAuthenticated) {
      const accessToken = await getAccessToken(
        `${import.meta.env.VITE_LOGTO_RESOURCES}`
      );
      try {
        const response = await axios.post(
          "http://localhost:5000/favorite/add-favorite-place",
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
      } catch (error) {
        console.error("Error adding favorite place:", error);
      }
    }
  };

  const handleRemovePlace = async (placeId) => {
    if (isAuthenticated) {
      const accessToken = await getAccessToken(
        `${import.meta.env.VITE_LOGTO_RESOURCES}`
      );
      try {
        await axios.delete(
          `http://localhost:5000/favorite/delete-favorite-place/${placeId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setFavoritePlaces(
          favoritePlaces.filter((place) => place.id !== placeId)
        );
      } catch (error) {
        console.error("Error removing favorite place:", error);
      }
    }
  };

  if (!isAuthenticated) {
    return <div>Please log in to manage favorite places.</div>;
  }

  return (
    <div>
      <h2>Add Favorite Place</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newPlace.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={newPlace.country}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="flag"
          placeholder="Flag"
          value={newPlace.flag}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="latitude"
          placeholder="Latitude"
          value={newPlace.latitude}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="longitude"
          placeholder="Longitude"
          value={newPlace.longitude}
          onChange={handleInputChange}
        />
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

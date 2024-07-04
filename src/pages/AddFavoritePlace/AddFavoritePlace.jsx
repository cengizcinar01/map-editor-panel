import { useLogto } from "@logto/react";
import { useEffect, useState } from "react";
import {
  addFavoritePlace,
  fetchFavoritePlaces,
  removeFavoritePlace,
} from "./api/favoritePlaceApi";
import FavoritePlaceForm from "./components/FavoritePlaceForm";
import FavoritePlaceList from "./components/FavoritePlaceList";

const AddFavoritePlace = () => {
  const { getAccessToken, isAuthenticated } = useLogto();
  const [favoritePlaces, setFavoritePlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const places = await fetchFavoritePlaces();
      setFavoritePlaces(places);
    };
    fetchPlaces();
  }, []);

  const handleAddPlace = async (newPlace) => {
    const accessToken = await getAccessToken(
      `${import.meta.env.VITE_LOGTO_RESOURCES}`
    );
    const addedPlace = await addFavoritePlace(newPlace, accessToken);
    setFavoritePlaces([...favoritePlaces, addedPlace]);
  };

  const handleRemovePlace = async (placeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this favorite place?"
    );
    if (confirmDelete) {
      const accessToken = await getAccessToken(
        `${import.meta.env.VITE_LOGTO_RESOURCES}`
      );
      await removeFavoritePlace(placeId, accessToken);
      setFavoritePlaces(favoritePlaces.filter((place) => place.id !== placeId));
    }
  };

  if (!isAuthenticated) {
    return <div>Please log in to manage favorite places.</div>;
  }

  return (
    <div>
      <h2>Add Favorite Place</h2>
      <FavoritePlaceForm onAddPlace={handleAddPlace} />
      <h2>Favorite Places</h2>
      <FavoritePlaceList
        places={favoritePlaces}
        onRemovePlace={handleRemovePlace}
      />
    </div>
  );
};

export default AddFavoritePlace;

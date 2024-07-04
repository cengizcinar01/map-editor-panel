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
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    const places = await fetchFavoritePlaces();
    setFavoritePlaces(places);
  };

  const handleAddPlace = async (newPlace) => {
    const accessToken = await getAccessToken(
      `${import.meta.env.VITE_LOGTO_RESOURCES}`
    );
    await addFavoritePlace(newPlace, accessToken);
    fetchPlaces();
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
      fetchPlaces();
    }
  };

  if (!isAuthenticated) {
    return <div>Please log in to manage favorite places.</div>;
  }

  return (
    <>
      <FavoritePlaceForm onAddPlace={handleAddPlace} />
      <FavoritePlaceList
        places={favoritePlaces}
        onRemovePlace={handleRemovePlace}
      />
    </>
  );
};

export default AddFavoritePlace;

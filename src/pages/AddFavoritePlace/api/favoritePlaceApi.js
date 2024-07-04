import axios from "axios";

export const fetchFavoritePlaces = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/favorite/get-favorite-place`
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const addFavoritePlace = async (newPlace, accessToken) => {
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
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const removeFavoritePlace = async (placeId, accessToken) => {
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
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

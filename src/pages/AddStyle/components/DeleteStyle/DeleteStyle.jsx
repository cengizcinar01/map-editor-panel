import axios from "axios";

const deleteStyle = async (styleId, accessToken) => {
  await axios.delete(
    `${import.meta.env.VITE_APP_API_URL}/style/delete-style/${styleId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export default deleteStyle;

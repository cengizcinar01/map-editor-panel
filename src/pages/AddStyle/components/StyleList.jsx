import axios from "axios";
import { useEffect, useState } from "react";

const StyleList = () => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/style/get-style`
        );
        setStyles(response.data);
      } catch (error) {
        console.error("Error fetching styles:", error);
      }
    };

    fetchStyles();
  }, []);

  return (
    <div>
      <h2>Styles</h2>
      {styles.map((style, index) => (
        <div key={index}>
          <h3>{style.style_name}</h3>
          <img
            src={`${import.meta.env.VITE_APP_ASSET_URL}/${style.style_img}`}
            alt={style.style_name}
          />
          <p>URL: {style.style_url}</p>
        </div>
      ))}
    </div>
  );
};

export default StyleList;

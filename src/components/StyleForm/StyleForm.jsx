import { useState } from "react";
import axios from "axios";

const StyleForm = () => {
  const [styleName, setStyleName] = useState("");
  const [styleUrl, setStyleUrl] = useState("");
  const [styleImg, setStyleImg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("style_name", styleName);
    formData.append("style_url", styleUrl);
    formData.append("style_img", styleImg);

    try {
      const response = await axios.post(
        "http://localhost:5000/style/add-style",
        formData
      );
      console.log("Style added successfully:", response.data);
      // Reset form fields
      setStyleName("");
      setStyleUrl("");
      setStyleImg(null);
    } catch (error) {
      console.error("Error adding style:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input
        type="text"
        placeholder="Style Name"
        value={styleName}
        onChange={(e) => setStyleName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Style URL"
        value={styleUrl}
        onChange={(e) => setStyleUrl(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setStyleImg(e.target.files[0])}
      />
      <button type="submit">Add Style</button>
    </form>
  );
};

export default StyleForm;

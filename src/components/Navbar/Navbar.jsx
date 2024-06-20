import { useLogto } from "@logto/react";
import axios from "axios";
import { useEffect } from "react";
import SignOut from "../Auth/SignOut";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  const { getAccessToken, isAuthenticated } = useLogto();

  useEffect(() => {
    const fetchProducts = async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessToken(
          `${import.meta.env.VITE_LOGTO_RESOURCES}`
        );
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_LOGTO_RESOURCES}/products`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log("Products:", response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };

    fetchProducts();
  }, [isAuthenticated, getAccessToken]);

  return (
    <>
      <div className={styles["navbar-container"]}>
        <SignOut />
      </div>
    </>
  );
};

export default Navbar;

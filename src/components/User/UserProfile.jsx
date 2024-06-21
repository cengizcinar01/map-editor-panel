import { useLogto } from "@logto/react";
import { useEffect, useState } from "react";
import styles from "./styles/UserProfile.module.css";

const UserProfile = () => {
  const { isAuthenticated, fetchUserInfo } = useLogto();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (isAuthenticated) {
        const userInfo = await fetchUserInfo();
        setUser(userInfo);
      }
    };

    fetchUser();
  }, [isAuthenticated, fetchUserInfo]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <>
      <div className={styles["user-profile"]}>
        {user.picture && (
          <img
            className={styles["profile-picture"]}
            src={user.picture}
            alt="Profile"
          />
        )}
        {user.name && <span className={styles["username"]}>{user.name}</span>}
      </div>
    </>
  );
};

export default UserProfile;

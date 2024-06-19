import { useLogto } from "@logto/react";
import { Outlet } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

const RootLayout = () => {
  const { isAuthenticated } = useLogto();
  return (
    <>
      {isAuthenticated && <Outlet />}
      {isAuthenticated && <SignOut />}
      <SignIn />
    </>
  );
};

export default RootLayout;

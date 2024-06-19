import { Outlet } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignOut from "./components/Auth/SignOut";

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <SignIn />
      <SignOut />
    </>
  );
};

export default RootLayout;

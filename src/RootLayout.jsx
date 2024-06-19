import { Outlet } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignOut from "./components/Auth/SignOut";
import Navbar from "./components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SignIn />
      <SignOut />
    </>
  );
};

export default RootLayout;

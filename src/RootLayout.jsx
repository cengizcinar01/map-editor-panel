import { Outlet } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import Navbar from "./components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SignIn />
    </>
  );
};

export default RootLayout;

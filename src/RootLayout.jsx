import { Outlet } from "react-router-dom";
import SignIn from "./components/SignIn";

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <SignIn />
    </>
  );
};

export default RootLayout;

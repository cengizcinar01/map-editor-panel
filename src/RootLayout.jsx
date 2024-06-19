import { useLogto } from "@logto/react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const { signIn, isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return (
      <>
        <Outlet />
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn("http://localhost:3001/callback")}>
        Sign In
      </button>
    </>
  );
};

export default RootLayout;

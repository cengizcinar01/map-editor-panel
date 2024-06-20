import { useLogto } from "@logto/react";
import RootLayout from "../../RootLayout";
import SignIn from "./SignIn";

const ProtectedRoute = () => {
  const { isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return (
      <>
        <RootLayout />
      </>
    );
  }

  return <SignIn />;
};

export default ProtectedRoute;

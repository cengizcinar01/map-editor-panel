import { useLogto } from "@logto/react";
import { useEffect } from "react";
import RootLayout from "../../RootLayout";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, signIn } = useLogto();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      void signIn(`${import.meta.env.VITE_LOGTO_REDIRECT_URL}/callback`);
    }
  }, [isAuthenticated, isLoading, signIn]);

  if (isAuthenticated) {
    return (
      <>
        <RootLayout />
      </>
    );
  }
};

export default ProtectedRoute;

import { useLogto } from "@logto/react";

const SignIn = () => {
  const { signIn, isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return <div>Signed in</div>;
  }

  return (
    <button
      onClick={() => signIn(`${import.meta.env.VITE_LOGTO_REDIRECT_URL}`)}
    >
      Sign In
    </button>
  );
};

export default SignIn;

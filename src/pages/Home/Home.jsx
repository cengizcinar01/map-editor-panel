import { useLogto } from "@logto/react";

const Home = () => {
  const { isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return <>Home</>;
  }
};
export default Home;

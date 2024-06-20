import { useLogto } from "@logto/react";

const Home = () => {
  const { isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return (
      <>
        <div>Home</div>
      </>
    );
  }
};
export default Home;

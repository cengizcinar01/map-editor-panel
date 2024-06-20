import { useLogto } from "@logto/react";

const Dashboard = () => {
  const { isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return (
      <>
        <div>Dashboard</div>
      </>
    );
  }
};
export default Dashboard;

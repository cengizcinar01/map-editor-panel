import { useEffect, useState } from "react";
import ResourceList from "./components/ResourceList";
import { resources } from "./data/resources";
import styles from "./styles/Dashboard.module.css";
import { checkStatus } from "./utils/statusCheck";

const Dashboard = () => {
  const [resourceStatus, setResourceStatus] = useState({});

  useEffect(() => {
    const updateStatus = async () => {
      const status = await checkStatus(resources);
      setResourceStatus(status);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dashboard}>
      <ResourceList resources={resources} resourceStatus={resourceStatus} />
    </div>
  );
};

export default Dashboard;

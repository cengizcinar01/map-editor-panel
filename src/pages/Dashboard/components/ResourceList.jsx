import styles from "./styles/ResourceList.module.css";

const ResourceList = ({ resources, resourceStatus }) => {
  return (
    <ul className={styles.resourceList}>
      {resources.map(({ name, url }) => (
        <li
          key={name}
          className={`${styles.resourceItem} ${
            styles[resourceStatus[name] || "unknown"]
          }`}
        >
          <span className={styles.resourceName}>{name}</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceUrl}
          >
            {url}
          </a>
          <span className={styles.resourceStatus}>
            {resourceStatus[name] || "unknown"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ResourceList;

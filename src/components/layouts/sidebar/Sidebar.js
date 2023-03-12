import styles from "./Sidebar.module.css";

function Sidebar(prop) {
  return <div className={styles.sidebar}>{prop.children}</div>;
}

export default Sidebar;

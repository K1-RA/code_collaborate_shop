import styles from "./MyComponent.module.scss";
const MyComponent = ({ title }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title} (using props)</h3>
      <p className={styles.paragraph}>And this is a container using SCSS module styling :)</p>
    </div>
  );
};

export default MyComponent;

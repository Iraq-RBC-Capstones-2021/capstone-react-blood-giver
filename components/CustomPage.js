import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
const Index = ({ children }) => {
  return (
    <div>
      <div className={styles.container}>
        <Navbar />
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Index;

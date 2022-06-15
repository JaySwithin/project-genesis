import Slideshow from "../Components/Slideshow";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.body}>
      <Slideshow />
    </div>
  );
};

export default Home;

import Footer from "../Components/Footer";
import Slideshow from "../Components/Slideshow";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.body}>
      <Slideshow />
      <Footer />
    </div>
  );
};

export default Home;

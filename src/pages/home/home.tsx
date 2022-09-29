import { useState } from "react";
import { images } from "@/constants/index";
import { calcWindowSize } from "src/helpers";
import clsx from "clsx";
import styles from "./home.module.scss";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const Home = () => {
  const [color, setColor] = useState<string | undefined>();

  const changeBackground = () => {
    if (window.scrollY < calcWindowSize(0)) {
      setColor("");
    } else if (
      window.scrollY >= calcWindowSize(0) &&
      window.scrollY < calcWindowSize(1)
    ) {
      setColor("teal");
    } else if (
      window.scrollY >= calcWindowSize(1) &&
      window.scrollY < calcWindowSize(2)
    ) {
      setColor("orange");
    } else if (
      window.scrollY >= calcWindowSize(2) &&
      window.scrollY < calcWindowSize(3)
    ) {
      setColor("yellow");
    } else if (
      window.scrollY >= calcWindowSize(3) &&
      window.scrollY < calcWindowSize(4)
    ) {
      setColor("red");
    } else if (
      window.scrollY >= calcWindowSize(4) &&
      window.scrollY < calcWindowSize(5)
    ) {
      setColor("blue");
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={styles.wrapper}>
      {images.map((item) => (
        <div key={item.id} className={styles.container}>
          <Header />
          <section className={clsx(styles.imageContainer, styles[color ? color : ""])}>
            <img src={item.image} alt="image" className={styles.img} />
          </section>
          <Footer />
        </div>
      ))}
    </div>
  );
};

export default Home;

import { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { images } from "@/constants/index";
import { calcWindowSize } from "@/helpers/index";
import { Context } from "@/context/index";

const Home = () => {
  const [color, setColor] = useState<string | undefined>();
  const { setState } = useContext(Context);

  const changeBackground = () => {
    if (window.scrollY < calcWindowSize(0)) {
      setColor("");
      setState(6);
    } else if (
      window.scrollY >= calcWindowSize(0) &&
      window.scrollY < calcWindowSize(1)
    ) {
      setColor("teal");
      setState(5);
    } else if (
      window.scrollY >= calcWindowSize(1) &&
      window.scrollY < calcWindowSize(2)
    ) {
      setColor("orange");
      setState(4);
    } else if (
      window.scrollY >= calcWindowSize(2) &&
      window.scrollY < calcWindowSize(3)
    ) {
      setColor("yellow");
      setState(3);
    } else if (
      window.scrollY >= calcWindowSize(3) &&
      window.scrollY < calcWindowSize(4)
    ) {
      setColor("red");
      setState(2);
    } else if (
      window.scrollY >= calcWindowSize(4) &&
      window.scrollY < calcWindowSize(5)
    ) {
      setColor("blue");
      setState(1);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={styles.wrapper}>
      {images.map((item) => (
        <div key={item.id} className={styles.container}>
          <section
            className={clsx(styles.imageContainer, styles[color ? color : ""])}
          >
            <img src={item.image} alt="image" className={styles.img} />
          </section>
        </div>
      ))}
    </div>
  );
};

export default Home;

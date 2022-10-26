import { Context } from "@/context/index";
import { useWindowSize } from "@/hooks/index";
import { useContext } from "react";
import styles from "./index.module.scss";

const Footer = () => {
  const { height } = useWindowSize();
  const { state } = useContext(Context);
  console.log(height);

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftTextContainer}>
        <div className={styles.leftText}>
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </div>
        <span className={styles.copyright}>
          © 2022 <a>Published by studio Milk</a>
        </span>
        <div>Privacy Policy</div>
        <p className={styles.website}>
          This project is for educational purpose. For the origin website please
          visit{" "}
          <a
            className={styles.link}
            href="https://backstagetalks.com"
            target="_blank"
          >
            Backstage Talks Website
          </a>
        </p>
      </div>
      <div className={styles.rightTextContainer}>
        <div
          className={`${state === 6 ? styles.active : null} ${styles.issue}`}
        >
          Issue 6
        </div>
        <div className={state === 5 && styles.active}>Issue 5</div>
        <div className={state === 4 && styles.active}>Issue 4</div>
        <div className={state === 3 && styles.active}>Issue 3</div>
        <div className={state === 2 && styles.active}>Issue 2</div>
        <div className={state === 1 && styles.active}>Issue 1</div>
      </div>
    </div>
  );
};

export default Footer;

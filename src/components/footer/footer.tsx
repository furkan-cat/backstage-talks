import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftTextContainer}>
        <div className={styles.leftText}>
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </div>
        <span className={styles.copyright}>© 2022 <a>Published by studio Milk</a></span>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;

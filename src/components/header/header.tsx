import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/images/logo.png" alt="ss" className={styles.logo} />
      <a>furi544@gmail.com</a>
    </div>
  );
};

export default Header;

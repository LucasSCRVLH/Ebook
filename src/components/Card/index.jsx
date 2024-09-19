import styles from "./card.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export function Card() {
  return (

    <li>
      <div className={styles.card}>
        <header className={styles["header-card"]}>
          <img className={styles.img} src="" alt="" />
        </header>

        <div className={styles["main-card"]}>
          <h3 className={styles.title}>Titulo</h3>
          <p className={styles.description}>Informações</p>
        </div>

        <div className={styles["card-details"]}>
          <span className={styles.author}>Autor</span>
        </div>

        <footer className={styles["footer-card"]}>
          <FaRegHeart color="#000000" />
          <FaRegBookmark color="#000000" />
          <FaRegCheckCircle size={16} color="#000000" />
        </footer>
      </div>
    </li>
  )
}

import styles from "./card.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export function Card({ title, cover, description }) {

  return (

    <li>
      <div className={styles.card}>
        <header className={styles["header-card"]}>
          <img className={styles.img} src={cover} alt="Capa do livro" />
        </header>

        <div className={styles["main-card"]}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles["card-details"]}>
          <span className={styles.author}>Autor:</span>
          <span className={styles.name}>Yuri Moreira Leocadio dasd</span>
        </div>

        <footer className={styles["footer-card"]}>
          <FaRegHeart color="#000000" />
          <FaHeart color="#ff0000" />
          <FaRegBookmark color="#000000" />
          <FaBookmark color="#ffff00" />
          <FaRegCheckCircle color="#000000" />
          <FaCheckCircle color="#038cfc" />
        </footer>
      </div>
    </li>
  )
}

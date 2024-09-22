import styles from "./card.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { STORAGE_SERVICE } from "../../services/storage";
import { DB_FAVORITES_KEY, DB_READ_KEY, DB_ORDER_KEY } from "../../services/storage";
import { useEffect, useState } from "react";

export function Card({ title, cover, description, autor }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const book = { title, cover, description, autor }

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(DB_FAVORITES_KEY)) || [];
    const read = JSON.parse(localStorage.getItem(DB_READ_KEY)) || [];
    const order = JSON.parse(localStorage.getItem(DB_ORDER_KEY)) || [];

    setIsLiked(favorites.some(book => book.title === title));
    setIsBookmarked(read.some(book => book.title === title));
    setIsChecked(order.some(book => book.title === title));
  }, [title]);

  const handleFavorite = () => {
    setIsLiked(prev => !prev);
    STORAGE_SERVICE.saveFavorite(book);
  };

  const handleRead = () => {
    setIsBookmarked(prev => !prev);
    STORAGE_SERVICE.saveRead(book);
  };

  const handleOrder = () => {
    setIsChecked(prev => !prev);
    STORAGE_SERVICE.saveOrder(book);
  };

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
          <span className={styles.name}>{autor}</span>
        </div>

        <footer className={styles["footer-card"]}>
          {isLiked ? (
            <FaHeart color="#ff0000" onClick={handleFavorite} />
          ) : (
            <FaRegHeart color="#000000" onClick={handleFavorite} />
          )}

          {isBookmarked ? (
            <FaBookmark color="#ffff00" onClick={handleRead} />
          ) : (
            <FaRegBookmark color="#000000" onClick={handleRead} />
          )}

          {isChecked ? (
            <FaCheckCircle color="#038cfc" onClick={handleOrder} />
          ) : (
            <FaRegCheckCircle color="#000000" onClick={handleOrder} />
          )}
        </footer>
      </div>
    </li>
  )
}

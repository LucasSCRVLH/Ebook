import styles from "./card.module.css";

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
            <i class="far fa-heart"></i>
            <i class="far fa-bookmark"></i>      
            <i class="far fa-check-circle"></i>
          </footer>
        </div>
      </li>
  )
}

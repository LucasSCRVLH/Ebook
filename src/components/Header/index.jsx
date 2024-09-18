import styles from "./header.module.css";
import logo from "../../assets/logo.png"
export function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>
          <img
            src={logo} 
            className={styles.logo}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Pesquise o livro desejado"
            className={styles.search}
          />
          <i class="fas fa-search"></i>
        </li>
      </ul>
    </header>
  );
}

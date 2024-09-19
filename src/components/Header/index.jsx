import styles from "./header.module.css";
import logo from "../../assets/logo.png"
import { IoMdSearch } from "react-icons/io";

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
          <IoMdSearch size={30}/>
        </li>
      </ul>
    </header>
  );
}

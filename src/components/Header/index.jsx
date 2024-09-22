import { useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";

export function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    if (onSearch && searchTerm.trim() !== "") {
      return onSearch(searchTerm);
    }
    return alert("Digite algo relevante para a busca")
  };

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
          <form>
          <input
            type="text"
            placeholder="Pesquise o livro desejado"
            className={styles.search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.btn} onClick={handleSearchClick} type="submit">
            <IoMdSearch size={30} cursor={'pointer'} />
          </button>
          </form>
        </li>
      </ul>
    </header>
  );
}

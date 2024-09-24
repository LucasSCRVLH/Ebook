import { useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { useLocation } from "react-router-dom"

export function Header({ onSearch }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && searchTerm.trim() !== "") {
      return onSearch(searchTerm);
    }
    setSearchTerm("");
    return alert("Digite algo relevante para a busca");
  };

  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>
          <img src={logo} className={styles.logo} />
        </li>
        {isHome ? (
          <li>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Pesquise o livro desejado"
                className={styles.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                minLength='2'
              />
              <button
                className={styles.btn}
                type="submit"
              >
                <IoMdSearch size={30} cursor={"pointer"} />
              </button>
            </form>
          </li>
        ) : null}
      </ul>
    </header>
  );
}

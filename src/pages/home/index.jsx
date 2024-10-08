import { useEffect, useState } from "react";
import { Aside } from "../../components/Aside";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import styles from "./home.module.css";
import { api } from "../../services/api";

export function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("programação");

  const handleSearch = (newSearchTerm) => {
    setSearch(newSearchTerm);
  };

  useEffect(() => {
    api.get(`books/v1/volumes?q=${search}+intitle:${search}&maxResults=30&printType=books`)
      .then(({ data }) => { setData(data.items) })
      .catch((err) => { console.log(err) })
  }, [search])

  return (
    <>
      <Header onSearch={handleSearch} />
      <Aside />

      <main className={styles.main}>
        {data.length === 0 ? (<p>Carregando...</p>) : (<ul className={styles.cards}>
          {data.map((item) => {
            let description = "Peço desculpas por não encontrarmos a descrição do livro. Estou aqui para ajudar a resolver isso.";
            if (item.volumeInfo.description) {
              description = item.volumeInfo.description.substring(0, 100) + "...";
            }

            let cover = "Sem capa";
            if (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) {
              cover = item.volumeInfo.imageLinks.thumbnail;
            }

            return (
              <Card
                key={item.id}
                title={item.volumeInfo.title.substring(0, 25) + "..." || "Sem título"}
                description={description}
                cover={cover}
                autor={item.volumeInfo.authors || "Autor não encontrado"}
              />
            )
          })}
        </ul>
        )}
      </main>
    </>
  );
}

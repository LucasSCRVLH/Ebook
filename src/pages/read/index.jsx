import styles from "./read.module.css";
import { Aside } from "../../components/Aside";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { DB_READ_KEY } from "../../services/storage";

export function Read() {
  let read = JSON.parse(localStorage.getItem(DB_READ_KEY)) || [];
  console.log(read);
  return (
    <>
      <Header />

      <Aside />

      <main className={styles.main}>
        {read.length === 0 ? (
          <p>Nenhum livro marcado como livro</p>
        ) : (
          <ul className={styles.cards}>
            {read.map((item) => {
              let description = "sem descriçâo";
              if (item.description) {
                description = item.description.substring(0, 100) + "...";
              }

              let cover = "Sem capa";
              if (item.cover) {
                cover = item.cover;
              }

              return (
                <Card
                  key={item.id}
                  title={item.title}
                  description={description}
                  cover={cover}
                  autor={item.autor}
                />
              );
            })}
          </ul>
        )}
      </main>
    </>
  );
}

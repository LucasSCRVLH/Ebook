import styles from "./fav.module.css";
import { Aside } from "../../components/Aside";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { DB_FAVORITES_KEY } from "../../services/storage";

export function Fav() {
  let fav = JSON.parse(localStorage.getItem(DB_FAVORITES_KEY)) || [];
    console.log(fav)
  return (
    <>
      <Header />

      <Aside />

      <main className={styles.main}>
        {fav.length === 0 ? (
          <p>Nenhum livro salvo como favorito</p>
        ) : (
          <ul className={styles.cards}>
            {fav.map((item) => {
                let description = "sem descriçâo";
                if (item.description) {
                    description = item.description.substring(0, 100) + "..."
                }

                let cover = "Sem capa";
                if (item.cover) {
                    cover = item.cover;
                }

                return  (
                    <Card
                    key={item.id}
                    title={item.title}
                    description={description}
                    cover={cover}
                    autor={item.autor}
            
                    />
                )
            })}
          </ul>
        )}

      </main>
    </>
  );
}

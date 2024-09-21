import { useEffect, useState } from "react";
import { Aside } from "../../components/Aside";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import styles from "./home.module.css";
import { api } from "../../services/api";

export function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get(`books/v1/volumes?q=harry&maxResults=30`)
      .then(({ data }) => { setData(data.items), console.log(data) })
      .catch((err) => { console.log(err) })
  }, [])

  return (
    <>
      <Header />
      <Aside />

      <main className={styles.main}>
        {data.length === 0 ? (<p>Carregando...</p>) : (<ul className={styles.cards}>
          {data.map(item => <Card key={item.id} title={item.volumeInfo.title} description={item.volumeInfo.description} cover={item.volumeInfo.imageLinks.thumbnail} />)}
        </ul>)}
      </main>
    </>
  );
}

import { Aside } from "../../components/Aside";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import styles from "./home.module.css";

export function Home() {
  return (
    <>
      <Header />

      <Aside />

      <main className={styles.main}>
        <Card />
      </main>
    </>
  );
}

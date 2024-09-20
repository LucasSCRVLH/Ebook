import styles from "./fav.module.css"
import { Aside } from "../../components/Aside";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export function Fav(){

    return(
       
        <>
            <Header/>
        
            <Aside/>
           
           
            <main className={styles.main}>
                <Card />
            </main>
            </>

    )
}
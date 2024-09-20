
import styles from "./read.module.css"
import { Aside } from "../../components/Aside";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";





export function Read(){

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

import styles from "./order.module.css"
import { Aside } from "../../components/Aside";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";



export function Order(){

   return(
       
        <>
            <Header/>
        
            <Aside text='Home' />
            
           <section className={styles.main}>
               <ul className={styles.cards}>
                  
               </ul>
           </section>
            
            
            </>

    )
}
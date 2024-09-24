
import styles from "./order.module.css"
import { Aside } from "../../components/Aside";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { DB_ORDER_KEY } from "../../services/storage";



export function Order(){
 let order = JSON.parse(localStorage.getItem(DB_ORDER_KEY)) || [];
  console.log(order);

   return(
       
        <>
            <Header/>
        
            <Aside/>
            
           <main className={styles.main}>
        {order.length === 0 ? (
          <p>Nenhum livro marcado como desejado</p>
        ) : (
          <ul className={styles.cards}>
            {order.map((item) => {
              let description = "Peço desculpas por não encontrarmos a descrição do livro. Estou aqui para ajudar a resolver isso.";
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

    )
}
import styles from "./aside.module.css"
import book from "../../assets/book.png"

export function Aside({text}){

    return(

        <div className={styles.aside}>

            <ul className={styles.list}>
                <li>Biblioteca <img className={styles.book} src={book} alt="" /></li>

                <div className={styles['div-li']}>
                <li>Favoritos</li>
                </div>

                <div className={styles['div-li']}>
                <li>Lidos</li>
                </div>

                <div className={styles['div-li']}>
                <li>Desejos</li>
                </div>

                <div className={styles['div-li']}>
                <li>{text}</li>
                </div>
            </ul>


        </div>


    )

}





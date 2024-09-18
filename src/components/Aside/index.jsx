import styles from "./aside.module.css"
import book from "../../assets/book.png"

export function Aside({text}){

    return(

        <div className={styles.aside}>

            <ul className={styles.list}>
                <li className={styles['aside-li']}>Biblioteca <img className={styles.book} src={book} alt="" /></li>

                <div className={styles['div-li']}>
                <li className={styles['aside-li']}>Favoritos</li>
                </div>

                <div className={styles['div-li']}>
                <li className={styles['aside-li']}>Lidos</li>
                </div>

                <div className={styles['div-li']}>
                <li className={styles['aside-li']}>Desejos</li>
                </div>

                <div className={styles['div-li']}>
                <li className={styles['aside-li']}>{text}</li>
                </div>
            </ul>


        </div>


    )

}





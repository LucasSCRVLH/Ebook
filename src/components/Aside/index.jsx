import styles from "./aside.module.css"
import book from "../../assets/book.png"
import { Link, useLocation } from "react-router-dom"

export function Aside() {
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    return (

        <div className={styles.aside}>

            <ul className={styles.list}>
                <li className={styles['aside-li']}>Biblioteca <img className={styles.book} src={book} alt="" /></li>

                <div className={styles['div-li']}>
                    <li>
                        <Link to={'/fav'} className={styles['aside-li']}>
                            Favoritos
                        </Link>
                    </li>
                </div>

                <div className={styles['div-li']}>
                    <li className={styles['aside-li']}>
                        <Link to={'/read'} className={styles['aside-li']}>
                            Lidos
                        </Link>
                    </li>
                </div>

                <div className={styles['div-li']}>
                    <li>
                        <Link to={'/order'} className={styles['aside-li']}>
                            Desejos
                        </Link>
                    </li>
                </div>

                {!isHome ? (
                    <div className={styles['div-li']}>
                        <li>
                            <Link to="/" className={styles['aside-li']}>
                                Home
                            </Link>
                        </li>
                    </div>
                ) : null}
            </ul>


        </div>


    )

}





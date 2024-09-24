import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={styles.menu}>
            <img className={styles.logo} src="https://classic.exame.com/wp-content/uploads/2017/08/new-youtube-logo-840x402.jpg?quality=70&strip=info&w=840" alt="Logo" />
            <ul className={styles.nav}>
                <li><a href="#">Início</a></li>
                <li><a href="#">Em Alta</a></li>
                <li><a href="#">Shorts</a></li>
            </ul>
            <img className={styles.user} src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Perfil" />
        </div>
    )
}
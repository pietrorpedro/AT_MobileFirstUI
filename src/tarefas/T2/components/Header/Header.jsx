import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={styles.menu}>
            <img className={styles.logo} src="https://classic.exame.com/wp-content/uploads/2017/08/new-youtube-logo-840x402.jpg?quality=70&strip=info&w=840" alt="Logo" />
            <ul className={styles.nav}>
                <li><a href="#">Início</a></li>
                <li><a href="#">Em Alta</a></li>
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Inscrições</a></li>
                <li><a href="#">Histórico</a></li>
                <li><a href="#">Música</a></li>
            </ul>
            <img className={styles.menuBtn} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt="Menu" />
        </div>
    )
}
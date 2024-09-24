import { useEffect, useState } from "react";
import styles from "./T11.module.css";

export default function T11() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        
        const handleMatch = (e) => {
            setMenuIsOpen(e.matches);
        };

        handleMatch(mediaQuery);
        mediaQuery.addEventListener('change', handleMatch);

        return () => {
            mediaQuery.removeEventListener('change', handleMatch);
        };
    }, []);

    return (
        <div className={styles.layout}>
            <div className={styles.headerContainer}>
                <nav className={styles.globalMenu}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
                        alt="Menu"
                        onClick={() => setMenuIsOpen(!menuIsOpen)}
                    />
                    <h1>Global Menu</h1>
                    {menuIsOpen && (
                        <div className={styles.menu}>
                            <ul>
                                <li>Produtos</li>
                                <li>Promoções</li>
                                <li>Contato</li>
                            </ul>
                        </div>
                    )}
                </nav>
                <div className={styles.header}><h1>Header</h1></div>
            </div>
            <aside className={styles.contextMenu}><h1>Context Menu</h1></aside>
            <main className={styles.mainContent}><h1>Main Content</h1></main>
            <div className={styles.ads}><h1>Ads</h1></div>
            <footer className={styles.footer}><h1>Footer</h1></footer>
        </div>
    )
}
import styles from "./T5.module.css";

export default function T5() {
    return (
        <div className={styles.layout}>
            <div className={styles.headerContainer}>
                <nav className={styles.globalMenu}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt="Menu" />
                    <h1>Global Menu</h1>
                </nav>
                <div className={styles.header}><h1>Header</h1></div>
            </div>
            <aside className={styles.contextMenu}><h1>Context Menu</h1></aside>
            <main className={styles.mainContent}><h1>Main Content</h1></main>
            <div className={styles.ads}><h1>Ads</h1></div>
            <footer className={styles.footer}><h1>Footer</h1></footer>
        </div>
    );
}

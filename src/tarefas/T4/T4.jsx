import Section from "./components/Section/Section";
import styles from "./T4.module.css";

export default function T4() {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <Section content="Header" />
            </div>
            <div className={styles.globalMenu}>
                <Section content="Global Menu" />
            </div>
            <div className={styles.contextMenu}>
                <Section content="Context Menu" />
            </div>
            <div className={styles.mainContent}>
                <Section content="Main Content" />
            </div>
            <div className={styles.ads}>
                <Section content="Ads" />
            </div>
            <div className={styles.footer}>
                <Section content="Footer" />
            </div>
        </div>
    );
}

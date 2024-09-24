import { useState } from "react";
import styles from "./T9.module.css";

export default function T9() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className={styles.menu}>
            <div className={styles.content}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
                    alt="Menu"
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                />
                <h1>Infnet</h1>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    alt="Perfil"
                />
            </div>
            {menuIsOpen && (
                <ul className={styles.list}>
                    <li>Início</li>
                    <li>Cursos</li>
                    <li>Graduações</li>
                    <li>Sobre</li>
                </ul>
            )}
        </div>
    )
}
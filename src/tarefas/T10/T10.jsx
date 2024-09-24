import { useEffect, useState } from "react";
import styles from "./T10.module.css";

export default function T10() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            const isDesktopNow = window.innerWidth > 768;
            setIsDesktop(isDesktopNow);
            setMenuIsOpen(isDesktopNow);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.menu}>
            <div className={styles.content}>
                {!isDesktop && (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
                        alt="Menu"
                        onClick={() => setMenuIsOpen(!menuIsOpen)}
                    />
                )}
                <h1>Infnet</h1>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    alt="Perfil"
                    className={styles.profile}
                />
            </div>
            {(menuIsOpen || isDesktop) && (
                <ul className={styles.list}>
                    <li>Início</li>
                    <li>Cursos</li>
                    <li>Graduações</li>
                    <li>Sobre</li>
                </ul>
            )}
        </div>
    );
}

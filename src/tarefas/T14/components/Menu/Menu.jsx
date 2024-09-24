import { useEffect, useState } from "react";
import styles from "./Menu.module.css";

export default function Menu({forumName}) {
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
                <h1>{forumName}</h1>
            </div>
            {(menuIsOpen || isDesktop) && (
                <ul className={styles.list}>
                    <li>Início</li>
                    <li>Post mais famoso</li>
                    <li>Post mais curtidos</li>
                    <li>Usuários</li>
                    <li>Entrar no grupo</li>
                </ul>
            )}
        </div>
    );
}
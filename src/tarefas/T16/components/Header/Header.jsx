import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
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
                <h1>E-Commerce</h1>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    alt="Perfil"
                    className={styles.profile}
                />
            </div>
            {(menuIsOpen || isDesktop) && (
                <ul className={styles.list}>
                    <li>Início</li>
                    <li>Produtos</li>
                    <li>Promoções</li>
                    <li>Suporte</li>
                </ul>
            )}
        </div>
    );
}

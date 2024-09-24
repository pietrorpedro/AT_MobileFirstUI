import styles from "./Card.module.css";

export default function Card({img, name, price}) {
    return (
        <div className={styles.card}>
            <img src={img} alt={name} />
            <div className={styles.cardContent}>
                <h2>{name}</h2>
                <p>R$ {price}</p>
            </div>
        </div>
    )
}
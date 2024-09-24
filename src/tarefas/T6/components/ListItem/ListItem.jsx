import styles from "./ListItem.module.css"

export default function ListItem({ name, price, quantity }) {
    return (
        <div className={styles.item}>
            <h2>{name}</h2>
            <div>
                <p>Valor unitário: R$ {price.toFixed(2)}</p>
                <p>Quantidade: {quantity}</p>
                <p>Valor total: R$ {(quantity * price).toFixed(2)}</p>
            </div>
        </div>
    )
}
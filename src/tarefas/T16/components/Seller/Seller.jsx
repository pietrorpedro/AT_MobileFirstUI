import styles from "./Seller.module.css"

export default function Seller({name, email, note}) {
    return (
        <div className={styles.seller}>
            <h2>Informações sobre o Vendedor</h2>
            <p>{name}</p>
            <p>Contato: {email}</p>
            <p>Nota: {note}/5</p>
        </div>
    )
}
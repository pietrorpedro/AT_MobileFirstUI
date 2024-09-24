import styles from "./Product.module.css"

export default function Product({ img, name, desc, price, note, userData, comments = [], questions = [] }) {
    return (
        <div className={styles.product}>
            <div className={styles.productContent}>
                <img src={img} alt={name} className={styles.productImage} />
                <div className={styles.productInfo}>
                    <h1>{name}</h1>
                    <p>Nota: {note}/5</p>
                    <p>Anunciado por: {userData.user}</p>
                    <p>R$ {price}</p>
                    <div className={styles.buttons}>
                        <button>Colocar no Carrinho</button>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
            <div className={styles.productDesc}>
                <h2>Descrição do Produto</h2>
                <p>{desc}</p>
            </div>
            <div className={styles.comments}>
                <h2>Comentários</h2>
                {comments.map((comment, index) => (
                    <div key={index}>
                        <h3>{comment.user} - {comment.date}</h3>
                        <p>{comment.comment}</p>
                        <p>Nota: {comment.note}/5</p>
                    </div>
                ))}
            </div>
            <div className={styles.questions}>
                <h2>Perguntas sobre o produto</h2>
                {questions.map((question, index) => (
                    <div key={index}>
                        <h3>{question.user} - {question.date}</h3>
                        <p>{question.question}</p>
                        <p>Resposta do Vendedor: {question.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
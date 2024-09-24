import styles from "./Question.module.css"

export default function Question({ question, onAnswer }) {
    return (
        <div className={styles.question}>
            <h2>{question.text}</h2>
            <div className={styles.buttons}>
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option.isCorrect)}>
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
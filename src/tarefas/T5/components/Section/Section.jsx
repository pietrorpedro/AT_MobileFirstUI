import styles from "./Section.module.css"

export default function Section({content}) {
    return (
        <div className={styles.section}>
            <h1>{content}</h1>
        </div>
    )
}
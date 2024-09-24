import { useState } from "react";

import styles from "./T3.module.css";

export default function T3() {

    const [number, setNumber] = useState(0);

    function handleNumber(action) {
        if (action === "-" && number != 0) {
            setNumber(number - 1);
        }
        if (action === "+") {
            setNumber(number + 1);

        }
    }

    return (
        <div className={styles.gallery}>
            <div className={styles.actions}>
                <button onClick={() => handleNumber("+")}>+</button>
                <h1>{number}</h1>
                <button onClick={() => handleNumber("-")}>-</button>
            </div>
            <div className={styles.images}>
                {[...Array(number)].map((_, index) => (
                    <img
                        src="https://placehold.co/100x100"
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}
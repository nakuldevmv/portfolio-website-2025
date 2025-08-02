'use client'
import styles from './button.module.css'

export default function Button({
    label = "Label",
    onClick = () => { },
    type = "button",

}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={styles.btn}
        >
            <div className={styles.circle}>
            </div>
            <div className={styles.txt}>
                {label}

            </div>

        </button>
    )
}

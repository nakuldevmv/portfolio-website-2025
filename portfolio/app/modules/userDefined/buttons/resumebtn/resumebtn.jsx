import { Eye } from 'lucide-react';
import style from './resumebtn.module.css'

export default function ResumeBtn({ onClick }) {
    return (
        <div
            className={style.ResumeBtn}
            onClick={onClick}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onClick?.(event);
                }
            }}
            role="button"
            tabIndex={0}
            aria-label="View Resume"
        >
            <span className={style.button}>
                Resume
            </span>
            <div className={style.EyeIcon}>
                <Eye height={24} width={24} />
            </div>
            <div className={style.circle}></div>
        </div>

    );
}

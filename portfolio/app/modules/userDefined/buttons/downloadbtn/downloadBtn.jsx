import { Download } from 'lucide-react';
import style from './downloadBtn.module.css';

export default function DownloadBtn({
    label = "Download",
    href,
    download,
    ariaLabel = "Download file",
}) {
    return (
        <a
            className={style.downloadBtn}
            href={href}
            download={download}
            aria-label={ariaLabel}
        >
            <span className={style.button}>
                {label}
            </span>
            <div className={style.icon}>
                <Download height={24} width={24} />
            </div>
            <div className={style.circle}></div>
        </a>
    );
}

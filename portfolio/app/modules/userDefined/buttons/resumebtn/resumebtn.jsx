import { Eye } from 'lucide-react';
import style from './resumebtn.module.css'
export default function ResumeBtn({ onClick }){
    return (
       <div className={style.ResumeBtn} onClick={onClick} role="button" aria-label="View Resume">
        <button className={style.button} >
          Resume
        </button>
        <div className={style.EyeIcon}>

        <Eye height={24} width={24} />
        </div>
        <div className={style.circle}></div>
       </div>

    );
}
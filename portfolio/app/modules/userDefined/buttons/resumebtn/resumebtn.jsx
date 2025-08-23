import { EyeIcon } from '@/app/customIcon';
import style from './resumebtn.module.css'
export default function ResumeBtn(){
    return (
       <div className={style.ResumeBtn}>
        <button className={style.button}>
          Resume
        </button>
        <div className={style.EyeIcon}>

        <EyeIcon height={24} width={24} />
        </div>
        <div className={style.circle}></div>
       </div>

    );
}
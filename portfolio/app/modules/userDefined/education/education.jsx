import style from './education.module.css'

export default function Education() {
    return (
        <div className={style.educationSection}>
            <h1 className={style.title}>Education</h1>
            <div className={style.timeline}>
                <div className={style.line}></div>
                <div className={style.details}>

                    <div className={style.ed1}>
                        <p className={style.duration}>2023 - 2026</p>
                        <h2 className={style.degree}>B.E Computer Science and Engineering</h2>
                        <p className={style.college}>JCT College of Engineering and Technology</p>
                        <p className={style.cgpa}>CGPA: <span>8.65/10</span> ✦︎ Honours Student</p>
                    </div>

                    <div className={style.ed1}>
                        <p className={style.duration}>2021 - 2023</p>
                        <h2 className={style.degree}>Diploma in Computer Engineering</h2>
                        <p className={style.college}>M-Dit Polytechnic College</p>
                        <p className={style.cgpa}>CGPA: <span>8.66/10</span> ✦︎ First Class with Distinction</p>
                    </div>

                    <div className={style.ed1}>
                        <p className={style.duration}>2018 - 2020</p>
                        <h2 className={style.degree}>Higher Secondary (Computer Science)</h2>
                        <p className={style.college}>Palora Higher Secondary School</p>
                        <p className={style.cgpa}>Percentage: <span>73.4%</span></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

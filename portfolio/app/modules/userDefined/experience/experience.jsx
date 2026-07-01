import Link from "next/link";
import style from "./experience.module.css";
import { experiences } from "./data";

export default function Experience() {
  return (
    <div className={style.educationSection}>
      <h2 className={style.title}>Work Experience</h2>

      <div className={style.timeline}>
        {/* Vertical Line */}
        <div className={style.line}></div>

        <div className={style.details}>
          {experiences.map((exp, index) => (
            <div key={index} className={style.ed1}>
              <p className={style.duration}>{exp.duration}</p>

              <div className={style.flexBox}>
                {/* Left Side: Role & Company */}
                <div className={style.flexBox11}>
                  <h3 className={style.degree}>{exp.role}</h3>

                  <p className={style.college}>
                    {exp.company.link ? (
                      <Link
                        href={exp.company.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#abff2e] transition-colors duration-300"
                      >
                        {exp.company.name}
                      </Link>
                    ) : (
                      exp.company.name
                    )}{" "}
                    | {exp.technologies}
                  </p>

                  <p className={style.description}>{exp.description}</p>
                </div>

                {/* Right Side: Bullet Points */}
                <div className={style.flexBox22}>
                  <ul className={style.cgpa}>
                    {exp.bulletPoints.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

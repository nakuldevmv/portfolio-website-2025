import Link from "next/link";
import style from "./experience.module.css";

export default function Experience() {
  return (
    <div className={style.educationSection}>
      <h2 className={style.title}>Work Experience</h2>

      <div className={style.timeline}>
        {/* Vertical Line */}
        <div className={style.line}></div>

        <div className={style.details}>
          <div className={style.ed1}>
            <p className={style.duration}>Dec 2025 – Present</p>

            <div className={style.flexBox}>
              {/* Left Side: Role & Company */}
              <div className={style.flexBox11}>
                <h3 className={style.degree}>Full Stack Developer Intern</h3>

                <p className={style.college}>
                  <Link
                    href="https://buildit3.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#abff2e] transition-colors duration-300"
                  >
                    BuildIt3
                  </Link>{" "}
                  | Node.js · Express · MongoDB · React
                </p>

                <p className={style.description}>
                  Working on backend systems for a SaaS product, building
                  scalable APIs and core business logic.
                </p>
              </div>

              {/* Right Side: Bullet Points */}
              <div className={style.flexBox22}>
                <ul className={style.cgpa}>
                  <li>
                    Built RESTful APIs for authentication and core features
                  </li>
                  <li>Optimized MongoDB schemas and queries for performance</li>
                  <li>
                    Worked with frontend and product teams on feature delivery
                  </li>
                  <li>
                    Contributed to clean architecture and production-ready code
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

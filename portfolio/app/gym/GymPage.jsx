"use client";

import { useEffect, useState } from "react";
import styles from "./gym.module.css";

const splitDays = [
  { number: "01", label: "Push", sublabel: "Chest · Shoulders · Triceps", tone: "push", id: "push" },
  { number: "02", label: "Pull", sublabel: "Back · Biceps", tone: "pull", id: "pull" },
  { number: "03", label: "Legs", sublabel: "Heavy Lower", tone: "legs", id: "legs" },
  { number: "04", label: "Rest", sublabel: "Recovery", tone: "rest", id: null },
  { number: "05", label: "Upper", sublabel: "Volume + Pump", tone: "upper", id: "upper" },
  { number: "06", label: "Lower", sublabel: "Ham + Glute Focus", tone: "lower", id: "lower" },
  { number: "07", label: "Rest", sublabel: "Recovery", tone: "rest", id: null },
];

const workoutSections = [
  {
    id: "push",
    day: "Day 01",
    title: "Push Day",
    description: "Chest · Shoulders · Triceps — Heavy compound base, isolation finishers",
    icon: "PD",
    tone: "push",
    rows: [
      ["Bench Press", "4", "5–8", "2–3 min", "Main heavy lift"],
      ["Incline DB Press", "3", "8–10", "90 sec", "Upper chest focus"],
      ["DB Shoulder Press", "3", "6–10", "2 min", "Controlled reps"],
      ["Cable/Machine Chest Fly", "3", "12–15", "60 sec", "Stretch + squeeze"],
      ["Lateral Raise", "4", "12–15", "60 sec", "Side delt priority"],
      ["Overhead Tricep Extension (Rope)", "3", "10–12", "60 sec", "Long head stretch"],
    ],
  },
  {
    id: "pull",
    day: "Day 02",
    title: "Pull Day",
    description: "Back · Biceps — Width, thickness, and rear delt coverage",
    icon: "PL",
    tone: "pull",
    rows: [
      ["Lat Pulldown (Wide/Neutral)", "4", "8–12", "90 sec", "Pull to chest"],
      ["Meadows Row", "3", "8–10", "2 min", "Back thickness"],
      ["Seated Cable Row", "3", "10–12", "90 sec", "Pause + squeeze"],
      ["Face Pull", "3", "12–15", "60 sec", "Rear delts + posture"],
      ["Shrugs", "3", "10–12", "60 sec", "Controlled reps"],
      ["Supinated Curl", "3", "10–12", "60 sec", "Full stretch"],
    ],
  },
  {
    id: "legs",
    day: "Day 03",
    title: "Leg Day",
    description: "Heavy Lower — Squat-focused, full quad and calf development",
    icon: "LG",
    tone: "legs",
    rows: [
      ["Squat / Hack Squat", "4", "5–8", "2–3 min", "Go deep"],
      ["Bulgarian Split Squat", "3", "8–10", "90 sec", "Stability + control"],
      ["Leg Press", "3", "10–12", "90 sec", "Don't lock knees"],
      ["Lying Leg Curl", "3", "10–12", "60 sec", "Slow eccentric"],
      ["Leg Extension", "3", "12–15", "60 sec", "Quad burnout"],
      ["Standing Calf Raise", "4", "12–15", "60 sec", "Full stretch"],
    ],
  },
  {
    id: "upper",
    day: "Day 05",
    title: "Upper Day",
    description: "Volume + Pump — Full upper body, moderate intensity, high output",
    icon: "UP",
    tone: "upper",
    rows: [
      ["Flat DB Press", "3", "8–10", "90 sec", "Controlled reps"],
      ["Bent Over Row", "3", "8–10", "2 min", "Tight core"],
      ["Lat Pulldown (Neutral Grip)", "3", "10–12", "90 sec", "Full stretch"],
      ["Lateral Raise", "4", "12–15", "60 sec", "Constant tension"],
      ["Cable Curl", "3", "10–12", "60 sec", "Strict form"],
      ["Tricep Pushdown", "3", "10–12", "60 sec", "Full lockout"],
    ],
  },
  {
    id: "lower",
    day: "Day 06",
    title: "Lower Day",
    description: "Hamstring + Glute Focus — RDL-based, posterior chain dominance",
    icon: "LW",
    tone: "lower",
    rows: [
      ["Romanian Deadlift", "4", "6–10", "2 min", "Stretch hamstrings"],
      ["Hack Squat", "3", "8–10", "2 min", "Quad focus"],
      ["Seated Leg Curl", "3", "10–12", "60 sec", "Controlled"],
      ["Leg Extension", "3", "12–15", "60 sec", "Burnout"],
      ["Hip Thrust", "3", "8–12", "90 sec", "Glute power"],
      ["Calf Raise", "4", "12–15", "60 sec", "Pause reps"],
    ],
  },
];

const rules = [
  {
    label: "Rule 01",
    title: "Progression",
    body: "Add weight or reps every single week. Even +1 rep counts as progress — that's the game.",
  },
  {
    label: "Rule 02",
    title: "Intensity",
    body: "Last set must be close to failure. Leave 1–2 reps in the tank — not 5.",
  },
  {
    label: "Rule 03",
    title: "Tempo",
    body: "2–3 sec controlled negative on every rep. The eccentric builds the muscle.",
  },
  {
    label: "Rule 04",
    title: "Cardio",
    body: "15–20 min post-workout or a separate session. Keep it consistent, not brutal.",
  },
  {
    label: "Rule 05",
    title: "Sleep",
    body: "7–8 hrs minimum. You don't grow in the gym — you grow while sleeping.",
  },
  {
    label: "Rule 06",
    title: "Protein",
    body: "140g+ daily. Non-negotiable. Hit this and half the battle is already won.",
  },
];

const dietMeals = [
  {
    meal: "Breakfast",
    items: [
      ["Whole eggs", "4 eggs (~200g)", "24g", "280 kcal"],
      ["Egg whites", "2 whites (~60g)", "8g", "35 kcal"],
      ["Bread", "2 slices (~60g)", "6g", "160 kcal"],
      ["Subtotal", "", "~38g", "~475 kcal"],
    ],
  },
  {
    meal: "Lunch",
    items: [
      ["Soya chunks (dry)", "75g", "38–40g", "260 kcal"],
      ["Rice (cooked)", "200g", "4–5g", "260 kcal"],
      ["Vegetables", "100g", "~2g", "~40 kcal"],
      ["Subtotal", "", "~42–45g", "~560 kcal"],
    ],
  },
  {
    meal: "Pre-workout",
    items: [["Banana", "120g", "1g", "100 kcal"]],
  },
  {
    meal: "Dinner",
    items: [
      ["Chicken (raw)", "200g", "55–60g", "300 kcal"],
      ["Rice or chapathi", "150g rice / 2 chapathi (~80g)", "3–5g", "180 kcal"],
      ["Vegetables", "100g", "~2g", "~40 kcal"],
      ["Subtotal", "", "~60–65g", "~520 kcal"],
    ],
  },
  {
    meal: "Night",
    items: [["Curd", "250g", "10–12g", "120 kcal"]],
  },
];

const dailyTotals = [
  ["Protein", "~140–150g"],
  ["Calories", "~1900–2100 kcal"],
];

export default function GymPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.pageShell}>
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
        <span className={styles.navLogo}>Final Form</span>
        <ul className={styles.navLinks}>
          {workoutSections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.title.replace(" Day", "")}</a>
            </li>
          ))}
          <li>
            <a href="#rules">Rules</a>
          </li>
          <li>
            <a href="#diet">Diet</a>
          </li>
        </ul>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <p className={styles.heroEyebrow}>Science-Based · Progressive · Sustainable</p>
        <h1 className={styles.heroTitle}>
          Final
          <span>Form</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Built on progressive overload, 12–16 sets per muscle per week, 2× frequency, and
          the compound-to-isolation balance that actually works.
        </p>
        <div className={styles.heroPills}>
          <span className={styles.pill}>Progressive Overload</span>
          <span className={styles.pill}>2× Frequency</span>
          <span className={styles.pill}>~12–16 Sets/Week</span>
          <span className={styles.pill}>Brad Schoenfeld Principles</span>
        </div>
        <div className={styles.scrollCue}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      <div className={styles.splitBar} aria-label="Weekly split overview">
        {splitDays.map((day) => (
          <div
            key={`${day.number}-${day.label}`}
            className={`${styles.splitItem} ${styles[`tone${day.tone}`]}`}
          >
            <div className={styles.dayNum}>{day.number}</div>
            <div className={styles.dayLabel}>{day.label}</div>
            <div className={styles.daySub}>{day.sublabel}</div>
            <div className={styles.dayDot} />
          </div>
        ))}
      </div>

      <div className={styles.container}>
        {workoutSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            data-reveal
            className={`${styles.section} ${styles.reveal} ${styles[`section${section.tone}`]}`}
          >
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIcon}>{section.icon}</div>
              <div className={styles.sectionMeta}>
                <div className={styles.sectionTag}>{section.day}</div>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.sectionDesc}>{section.description}</p>
              </div>
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Exercise</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Rest</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td>
                        <span className={styles.setsBadge}>{row[1]}</span>
                      </td>
                      <td className={styles.repsText}>{row[2]}</td>
                      <td className={styles.restText}>{row[3]}</td>
                      <td className={styles.notesText}>{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section id="rules" data-reveal className={`${styles.section} ${styles.reveal}`}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionIcon} ${styles.rulesIcon}`}>FX</div>
            <div className={styles.sectionMeta}>
              <div className={styles.sectionTag}>Non-Negotiables</div>
              <h2 className={`${styles.sectionTitle} ${styles.rulesTitle}`}>Final Rules</h2>
              <p className={styles.sectionDesc}>
                This is what separates results from wasted time.
              </p>
            </div>
          </div>

          <div className={styles.rulesGrid}>
            {rules.map((rule) => (
              <article key={rule.label} className={styles.ruleCard}>
                <div className={styles.ruleLabel}>{rule.label}</div>
                <h3 className={styles.ruleTitle}>{rule.title}</h3>
                <p className={styles.ruleBody}>{rule.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="diet" data-reveal className={`${styles.section} ${styles.reveal}`}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionIcon} ${styles.dietIcon}`}>DT</div>
            <div className={styles.sectionMeta}>
              <div className={styles.sectionTag}>Cutting Protocol</div>
              <h2 className={`${styles.sectionTitle} ${styles.dietTitle}`}>Optimal Cutting Diet</h2>
              <p className={styles.sectionDesc}>
                Calories: ~1900–2100 kcal · Protein: ~135–150g
              </p>
            </div>
          </div>

          <div className={styles.dietTargets}>
            <div className={styles.targetCard}>
              <span className={styles.targetLabel}>Calories</span>
              <strong>~1900–2100 kcal</strong>
            </div>
            <div className={styles.targetCard}>
              <span className={styles.targetLabel}>Protein</span>
              <strong>~135–150g</strong>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Meal</th>
                  <th>Food</th>
                  <th>Quantity</th>
                  <th>Protein</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {dietMeals.flatMap((meal) =>
                  meal.items.map((item, index) => (
                    <tr key={`${meal.meal}-${item[0]}`}>
                      <td>{index === 0 ? meal.meal : ""}</td>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                      <td className={styles.repsText}>{item[2]}</td>
                      <td className={styles.restText}>{item[3]}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className={styles.totalsCard}>
            <div className={styles.totalsHeader}>Daily Total</div>
            <div className={styles.totalsGrid}>
              {dailyTotals.map((item) => (
                <div key={item[0]} className={styles.totalRow}>
                  <span>{item[0]}</span>
                  <strong>{item[1]}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-reveal className={`${styles.verdict} ${styles.reveal}`}>
          <div className={styles.verdictGhost}>GO</div>
          <h2 className={styles.verdictTitle}>
            Stay Consistent. <em>Get Sharp.</em>
          </h2>
          <div className={styles.verdictChecks}>
            <div className={styles.checkItem}>Progressive Overload</div>
            <div className={styles.checkItem}>2× Weekly Frequency</div>
            <div className={styles.checkItem}>High Protein Intake</div>
            <div className={styles.checkItem}>Recover Hard</div>
          </div>
          <p className={styles.verdictCta}>
            Train with intent, eat with discipline, and let the boring consistency do the
            work.
          </p>
        </section>
      </div>
    </main>
  );
}

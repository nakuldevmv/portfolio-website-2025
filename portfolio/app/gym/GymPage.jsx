"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUp, 
  ArrowDown, 
  Zap, 
  Activity, 
  Flame, 
  Scale, 
  ShieldCheck, 
  Bed, 
  UtensilsCrossed, 
  Droplet,
  ExternalLink
} from "lucide-react";
import styles from "./gym.module.css";

const workoutSections = [
  {
    id: "push",
    day: "Day 01",
    title: "Push Day",
    description: "Chest · Shoulders · Triceps — Heavy compound base, isolation finishers",
    icon: <ArrowUp size={28} strokeWidth={1.5} />,
    rows: [
      ["Bench Press", "4", "5–8", "2–3 min", "Main heavy lift"],
      ["Incline DB Press", "3", "8–10", "90 sec", "Upper chest focus"],
      ["DB Shoulder Press", "3", "6–10", "2 min", "Controlled reps"],
      ["Cable/Machine Chest Fly", "3", "12–15", "60 sec", "Stretch + squeeze"],
      ["Lateral Raise", "4", "12–15", "60 sec", "Side delt priority"],
      ["Overhead Tricep Extension", "3", "10–12", "60 sec", "Long head stretch"],
    ],
  },
  {
    id: "pull",
    day: "Day 02",
    title: "Pull Day",
    description: "Back · Biceps — Width, thickness, and rear delt coverage",
    icon: <ArrowDown size={28} strokeWidth={1.5} />,
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
    icon: <Zap size={28} strokeWidth={1.5} />,
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
    icon: <Activity size={28} strokeWidth={1.5} />,
    rows: [
      ["Flat DB Press", "3", "8–10", "90 sec", "Controlled reps"],
      ["Bent Over Row", "3", "8–10", "2 min", "Tight core"],
      ["Lat Pulldown (Neutral)", "3", "10–12", "90 sec", "Full stretch"],
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
    icon: <Flame size={28} strokeWidth={1.5} />,
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
    label: "01",
    title: "Progression",
    icon: <Scale size={24} strokeWidth={1.5} />,
    body: "Add weight or reps every single week. Even +1 rep counts as progress.",
  },
  {
    label: "02",
    title: "Intensity",
    icon: <Zap size={24} strokeWidth={1.5} />,
    body: "Last set must be close to failure. Leave 1–2 reps in the tank — not 5.",
  },
  {
    label: "03",
    title: "Tempo",
    icon: <Activity size={24} strokeWidth={1.5} />,
    body: "2–3 sec controlled negative on every rep. The eccentric builds the muscle.",
  },
  {
    label: "04",
    title: "Cardio",
    icon: <Droplet size={24} strokeWidth={1.5} />,
    body: "15–20 min post-workout or a separate session. Keep it consistent, not brutal.",
  },
  {
    label: "05",
    title: "Sleep",
    icon: <Bed size={24} strokeWidth={1.5} />,
    body: "7–8 hrs minimum. You don't grow in the gym — you grow while sleeping.",
  },
  {
    label: "06",
    title: "Protein",
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
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
    ],
  },
  {
    meal: "Lunch",
    items: [
      ["Soya chunks (dry)", "75g", "38–40g", "260 kcal"],
      ["Rice (cooked)", "200g", "4–5g", "260 kcal"],
      ["Vegetables", "100g", "~2g", "~40 kcal"],
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
      ["Rice/Chapathi", "150g rice / 2 chapathi", "3–5g", "180 kcal"],
      ["Vegetables", "100g", "~2g", "~40 kcal"],
    ],
  },
  {
    meal: "Night",
    items: [["Curd", "250g", "10–12g", "120 kcal"]],
  },
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function GymPage() {
  return (
    <main className={styles.pageShell}>
      {/* Dynamic Backgrounds */}
      <div className={styles.noiseOverlay} />
      <div className={styles.gradientBg} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.heroEyebrow}
        >
          Science-Based Insights
        </motion.div>
        
        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Final Form.
        </motion.h1>
        
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Built on progressive overload, volume mastery, and the compound-to-isolation balance that actually yields results. Eliminate the noise.
        </motion.p>
      </section>

      {/* Quick Nav (Un-boxed, glass) */}
      <motion.nav 
        className={styles.nav}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className={styles.navInner}>
          {workoutSections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className={styles.navLink}>
              {section.title.replace(" Day", "")}
            </a>
          ))}
          <div className={styles.navSeparator} />
          <a href="#rules" className={styles.navLink}>Rules</a>
          <a href="#diet" className={styles.navLink}>Diet</a>
        </div>
      </motion.nav>

      <div className={styles.contentArea}>
        {/* Workout Sections */}
        {workoutSections.map((section) => (
          <motion.section 
            key={section.id} 
            id={section.id} 
            className={styles.section}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrap}>{section.icon}</div>
              <div className={styles.headerText}>
                <span className={styles.sectionTag}>{section.day}</span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.sectionDesc}>{section.description}</p>
              </div>
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Exercise / Movement</th>
                    <th className={styles.tdCenter}>Sets</th>
                    <th className={styles.tdCenter}>Reps</th>
                    <th>Execution Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row) => (
                    <tr key={row[0]}>
                      <td className={styles.exerciseName}>
                        <a 
                          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(row[0] + " exercise proper form")}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.ytLink}
                          title={`Search ${row[0]} form on YouTube`}
                        >
                          {row[0]}
                          <ExternalLink size={14} className={styles.ytIcon} strokeWidth={2} />
                        </a>
                      </td>
                      <td className={styles.tdCenter}>
                        <span className={styles.setsIndicator}>{row[1]}</span>
                      </td>
                      <td className={`${styles.tdCenter} ${styles.repsText}`}>{row[2]}</td>
                      <td className={styles.notesText}>{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        ))}

        {/* Rules Section */}
        <motion.section 
          id="rules" 
          className={styles.section}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.headerText}>
              <span className={styles.sectionTag}>Principles</span>
              <h2 className={styles.sectionTitle}>Non-Negotiables</h2>
              <p className={styles.sectionDesc}>
                These aren't recommendations. This is what separates marginal gains from true transformation.
              </p>
            </div>
          </div>

          <motion.div 
            className={styles.rulesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {rules.map((rule) => (
              <motion.article 
                key={rule.label} 
                className={styles.ruleItem}
                variants={fadeIn}
              >
                <div className={styles.ruleTop}>
                  <div className={styles.ruleIcon}>{rule.icon}</div>
                  <span className={styles.ruleLabel}>{rule.label}</span>
                </div>
                <h3 className={styles.ruleTitle}>{rule.title}</h3>
                <p className={styles.ruleBody}>{rule.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        {/* Diet Section */}
        <motion.section 
          id="diet" 
          className={styles.section}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.sectionHeader}>
             <div className={styles.iconWrap}><UtensilsCrossed size={28} strokeWidth={1.5} /></div>
             <div className={styles.headerText}>
              <span className={styles.sectionTag}>Nutritionology</span>
              <h2 className={styles.sectionTitle}>Optimal Cut</h2>
              <p className={styles.sectionDesc}>
                Target: ~2000 kcal · 140g+ Protein. The fuel dictates the outcome.
              </p>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Phase / Time</th>
                  <th>Source</th>
                  <th className={styles.tdCenter}>Proto-Load</th>
                  <th className={styles.tdRight}>Est. Kcal</th>
                </tr>
              </thead>
              <tbody>
                {dietMeals.flatMap((meal) =>
                  meal.items.map((item, index) => (
                    <tr key={`${meal.meal}-${item[0]}`}>
                      <td className={styles.mealPhase}>
                        {index === 0 ? meal.meal : ""}
                      </td>
                      <td>
                        <div className={styles.foodName}>{item[0]}</div>
                        <div className={styles.foodQty}>{item[1]}</div>
                      </td>
                      <td className={`${styles.tdCenter} ${styles.repsText}`}>{item[2]}</td>
                      <td className={`${styles.tdRight} ${styles.notesText}`}>{item[3]}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.section>
        
        {/* Footer Polish */}
        <motion.div 
          className={styles.verdict}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>Stay Consistent.</h2>
        </motion.div>

      </div>
    </main>
  );
}

"use client";

import React, { useEffect, useState, useRef, Fragment } from "react";
import ToggleTheme from "../modules/theme/toggleTheme";
import { motion, AnimatePresence } from "framer-motion";
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
  ExternalLink,
  Timer,
  Plus,
  Play,
  Pause,
  X,
} from "lucide-react";
import styles from "./gym.module.css";

const ALARM_SOUND_SRC = "/gym-alarm.mp3";
const TAP_HAPTIC_PATTERN = 12;
const COMPLETION_HAPTIC_PATTERN = [240, 80, 280, 80, 360];

// ========================
// DATA DEFINITIONS
// ========================

const workoutSections = [
  {
    id: "push",
    day: "Day 01",
    title: "Push Day",
    description:
      "Chest · Shoulders · Triceps — Heavy compound base, isolation finishers",
    icon: <ArrowUp size={28} strokeWidth={1.5} />,
    rows: [
      ["Bench Press", "4", "5–8", "120", "Main heavy lift"], // Rest in seconds
      ["Incline DB Press", "3", "8–10", "90", "Upper chest focus"],
      ["DB Shoulder Press", "3", "6–10", "120", "Controlled reps"],
      ["Cable/Machine Chest Fly", "3", "12–15", "60", "Stretch + squeeze"],
      ["Lateral Raise", "4", "12–15", "60", "Side delt priority"],
      ["Overhead Tricep Extension", "3", "10–12", "60", "Long head stretch"],
    ],
  },
  {
    id: "pull",
    day: "Day 02",
    title: "Pull Day",
    description: "Back · Biceps — Width, thickness, and rear delt coverage",
    icon: <ArrowDown size={28} strokeWidth={1.5} />,
    rows: [
      ["Lat Pulldown (Wide/Neutral)", "4", "8–12", "90", "Pull to chest"],
      ["Meadows Row", "3", "8–10", "120", "Back thickness"],
      ["Seated Cable Row", "3", "10–12", "90", "Pause + squeeze"],
      ["Face Pull", "3", "12–15", "60", "Rear delts + posture"],
      ["Shrugs", "3", "10–12", "60", "Controlled reps"],
      ["Supinated Curl", "3", "10–12", "60", "Full stretch"],
    ],
  },
  {
    id: "legs",
    day: "Day 03",
    title: "Leg Day",
    description: "Heavy Lower — Squat-focused, full quad and calf development",
    icon: <Zap size={28} strokeWidth={1.5} />,
    rows: [
      ["Squat / Hack Squat", "4", "5–8", "180", "Go deep"],
      ["Bulgarian Split Squat", "3", "8–10", "90", "Stability + control"],
      ["Leg Press", "3", "10–12", "90", "Don't lock knees"],
      ["Lying Leg Curl", "3", "10–12", "60", "Slow eccentric"],
      ["Leg Extension", "3", "12–15", "60", "Quad burnout"],
      ["Standing Calf Raise", "4", "12–15", "60", "Full stretch"],
    ],
  },
  {
    id: "upper",
    day: "Day 05",
    title: "Upper Day",
    description:
      "Volume + Pump — Full upper body, moderate intensity, high output",
    icon: <Activity size={28} strokeWidth={1.5} />,
    rows: [
      ["Flat DB Press", "3", "8–10", "90", "Controlled reps"],
      ["Bent Over Row", "3", "8–10", "120", "Tight core"],
      ["Lat Pulldown (Neutral)", "3", "10–12", "90", "Full stretch"],
      ["Lateral Raise", "4", "12–15", "60", "Constant tension"],
      ["Cable Curl", "3", "10–12", "60", "Strict form"],
      ["Tricep Pushdown", "3", "10–12", "60", "Full lockout"],
    ],
  },
  {
    id: "lower",
    day: "Day 06",
    title: "Lower Day",
    description:
      "Hamstring + Glute Focus — RDL-based, posterior chain dominance",
    icon: <Flame size={28} strokeWidth={1.5} />,
    rows: [
      ["Romanian Deadlift", "4", "6–10", "120", "Stretch hamstrings"],
      ["Hack Squat", "3", "8–10", "120", "Quad focus"],
      ["Seated Leg Curl", "3", "10–12", "60", "Controlled"],
      ["Leg Extension", "3", "12–15", "60", "Burnout"],
      ["Hip Thrust", "3", "8–12", "90", "Glute power"],
      ["Calf Raise", "4", "12–15", "60", "Pause reps"],
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

const dailyTotals = [
  ["Protein", "~140–150g"],
  ["Calories", "~1900–2100 kcal"],
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// --- NEW PREMIUM COMPONENTS ---

const OneRepMaxCalculator = () => {
  const [w, setW] = useState("");
  const [r, setR] = useState("");
  
  const calc1RM = (weight, reps) => {
    const fw = parseFloat(weight);
    const fr = parseFloat(reps);
    if (!fw || !fr || isNaN(fw) || isNaN(fr) || fr < 1) return null;
    return Math.round(fw * (36 / (37 - fr)));
  };
  
  const max = calc1RM(w, r);
  
  return (
    <div className={styles.ormWidget}>
      <div className={styles.ormHeader}>
        <Activity size={18} />
        <h4>Inline 1RM</h4>
      </div>
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        Calculate your one-repetition maximum (the heaviest weight you can lift once) based on your recent sets. 
      </p>
      <div className={styles.ormInputs}>
        <input type="number" placeholder="Weight" value={w} onChange={e=>setW(e.target.value)} />
        <input type="number" placeholder="Reps" value={r} onChange={e=>setR(e.target.value)} />
      </div>
      {max && (
        <div className={styles.ormResults}>
          <div className={styles.ormMax}>Max: <strong>{max} kg</strong></div>
          <div className={styles.ormGrid}>
             <div>95% <span>{Math.round(max * 0.95)}</span></div>
             <div>90% <span>{Math.round(max * 0.9)}</span></div>
             <div>85% <span>{Math.round(max * 0.85)}</span></div>
             <div>80% <span>{Math.round(max * 0.8)}</span></div>
             <div>75% <span>{Math.round(max * 0.75)}</span></div>
             <div>70% <span>{Math.round(max * 0.7)}</span></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function GymPage() {
  // === Feature: Rest Timer ===
  const [restTime, setRestTime] = useState(0);
  const [timerVisible, setTimerVisible] = useState(false);
  const [timerPlaying, setTimerPlaying] = useState(false);
  const [isAlarmVisualActive, setIsAlarmVisualActive] = useState(false);
  const timerRef = useRef(null);
  const audioRef = useRef(null);
  const canVibrateRef = useRef(false);
  const alarmActiveRef = useRef(false);
  const audioContextRef = useRef(null);
  const audioBufferRef = useRef(null);
  const audioSourceRef = useRef(null);
  const audioLoadPromiseRef = useRef(null);

  const triggerVibration = (pattern) => {
    if (!canVibrateRef.current) return false;

    try {
      navigator.vibrate(0);
      return navigator.vibrate(pattern);
    } catch {
      return false;
    }
  };

  const triggerTapFeedback = () => {
    void primeAlertPlayback();
    triggerVibration(TAP_HAPTIC_PATTERN);
  };

  const triggerCompletionFeedback = () => {
    setIsAlarmVisualActive(true);
    triggerVibration(COMPLETION_HAPTIC_PATTERN);
  };

  const ensureAlarmAudio = () => {
    if (audioRef.current) return audioRef.current;

    const audio = new Audio(ALARM_SOUND_SRC);
    audio.preload = "auto";
    audio.playsInline = true;
    audio.loop = true;
    audio.volume = 1;
    audioRef.current = audio;
    return audio;
  };

  const ensureAudioContext = () => {
    if (typeof window === "undefined") return null;

    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return null;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextClass();
    }

    return audioContextRef.current;
  };

  const loadAlarmBuffer = async () => {
    if (audioBufferRef.current) return audioBufferRef.current;
    if (audioLoadPromiseRef.current) return audioLoadPromiseRef.current;

    const context = ensureAudioContext();
    if (!context) return null;

    audioLoadPromiseRef.current = fetch(ALARM_SOUND_SRC)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Failed to load alarm audio: ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const decoded = await context.decodeAudioData(arrayBuffer.slice(0));
        audioBufferRef.current = decoded;
        return decoded;
      })
      .catch((error) => {
        audioLoadPromiseRef.current = null;
        console.warn("Web Audio alarm buffer unavailable, using fallback audio.", error);
        return null;
      });

    return audioLoadPromiseRef.current;
  };

  const primeAlertPlayback = async () => {
    const context = ensureAudioContext();
    ensureAlarmAudio();

    if (context && context.state !== "running") {
      try {
        await context.resume();
      } catch (error) {
        console.warn("Unable to resume audio context on this interaction.", error);
      }
    }

    await loadAlarmBuffer();
    return context;
  };

  const stopWebAudioAlarm = () => {
    if (!audioSourceRef.current) return;

    const source = audioSourceRef.current;
    audioSourceRef.current = null;
    source.onended = null;

    try {
      source.stop(0);
    } catch {}

    try {
      source.disconnect();
    } catch {}
  };

  const stopAlarmAudio = () => {
    alarmActiveRef.current = false;
    setIsAlarmVisualActive(false);
    stopWebAudioAlarm();
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const playFallbackAlarm = async () => {
    const audio = ensureAlarmAudio();
    alarmActiveRef.current = true;

    try {
      audio.pause();
      audio.currentTime = 0;
      await audio.play();
      return true;
    } catch {
      return false;
    }
  };

  const playWebAudioAlarm = async () => {
    const context = await primeAlertPlayback();
    const buffer = await loadAlarmBuffer();

    if (!context || !buffer || context.state !== "running") {
      return false;
    }

    stopWebAudioAlarm();

    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.onended = () => {
      if (!alarmActiveRef.current) return;
      if (audioSourceRef.current !== source) return;
      audioSourceRef.current = null;
      void playWebAudioAlarm();
    };

    audioSourceRef.current = source;

    try {
      source.start(0);
      return true;
    } catch {
      source.onended = null;
      audioSourceRef.current = null;
      return false;
    }
  };

  const playAlarmSound = async () => {
    alarmActiveRef.current = true;
    setIsAlarmVisualActive(true);

    const playedWithWebAudio = await playWebAudioAlarm();
    if (!playedWithWebAudio) {
      await playFallbackAlarm();
    }
  };

  const startTimer = (seconds) => {
    triggerTapFeedback();
    stopAlarmAudio();
    void primeAlertPlayback();
    setRestTime(seconds);
    setTimerVisible(true);
    setTimerPlaying(true);
  };

  const closeTimer = () => {
    triggerTapFeedback();
    setTimerVisible(false);
    setTimerPlaying(false);
    setRestTime(0);
    stopAlarmAudio();
  };

  useEffect(() => {
    canVibrateRef.current =
      typeof navigator !== "undefined" && typeof navigator.vibrate === "function";
    const audio = ensureAlarmAudio();
    const handleAudioEnded = async () => {
      if (!alarmActiveRef.current) return;
      await playFallbackAlarm();
    };

    audio.addEventListener("ended", handleAudioEnded);
    void loadAlarmBuffer();

    return () => {
      audio.removeEventListener("ended", handleAudioEnded);
      stopAlarmAudio();
    };
  }, []);

  useEffect(() => {
    if (timerPlaying && restTime > 0) {
      timerRef.current = setInterval(() => {
        setRestTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setTimerPlaying(false);
            playAlarmSound();
            triggerCompletionFeedback();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [timerPlaying, restTime]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // === Feature: Logbook LocalStorage ===
  const [logs, setLogs] = useState({});
  const [activeLogItem, setActiveLogItem] = useState(null);
  const [logInput, setLogInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("gymProgressionLogs");
    if (saved) {
      setLogs(JSON.parse(saved));
    }
  }, []);

  const openLogPrompt = (exerciseName) => {
    triggerTapFeedback();
    setActiveLogItem(exerciseName);
    setLogInput(logs[exerciseName] || "");
  };

  const handleSaveLog = () => {
    triggerTapFeedback();
    if (activeLogItem && logInput) {
      const newLogs = { ...logs, [activeLogItem]: logInput };
      setLogs(newLogs);
      localStorage.setItem("gymProgressionLogs", JSON.stringify(newLogs));
    }
    setActiveLogItem(null);
    setLogInput("");
  };

  // Diet Data reverted to static

  // === Feature: Workout Mode (Wake Lock) ===
  const [isWorkoutMode, setIsWorkoutMode] = useState(false);
  const wakeLockRef = useRef(null);

  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        wakeLockRef.current = await navigator.wakeLock.request("screen");
        wakeLockRef.current.addEventListener("release", () => {
          console.log("Screen Wake Lock released");
        });
        console.log("Screen Wake Lock acquired");
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);
      }
    };

    if (isWorkoutMode && "wakeLock" in navigator) {
      requestWakeLock();
    } else if (!isWorkoutMode && wakeLockRef.current) {
      wakeLockRef.current.release();
      wakeLockRef.current = null;
    }

    // Re-acquire on visibility change if active
    const handleVisibilityChange = () => {
      if (
        wakeLockRef.current !== null &&
        document.visibilityState === "visible" &&
        isWorkoutMode
      ) {
        requestWakeLock();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (wakeLockRef.current) wakeLockRef.current.release();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isWorkoutMode]);

  return (
    <main className={styles.pageShell}>
      {/* Dynamic Backgrounds */}
      <div className={styles.noiseOverlay} />
      <div className={styles.gradientBg} />

      {/* Floating Timer Island */}
      <AnimatePresence>
        {timerVisible && (
          <motion.div
            className={styles.timerIsland}
            initial={{ y: 100, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: 100, opacity: 0, x: "-50%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div
              className={`${styles.timerContent} ${isAlarmVisualActive ? styles.timerAlerting : ""}`}
            >
              <div
                className={`${styles.timerPulse} ${restTime === 0 ? styles.timerDone : ""}`}
              />
              <div className={styles.timerTextWrap}>
                {(restTime > 0 ? formatTime(restTime) : "0:00")
                  .split("")
                  .map((char, index) => (
                    <div key={index} className={styles.digitBox}>
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={char}
                          initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                          exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                          className={styles.timerText}
                        >
                          {char}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  ))}
              </div>
              {isAlarmVisualActive && (
                <div className={styles.timerAlertBadge}>Alarm Active</div>
              )}
              <button
                type="button"
                className={styles.timerIconBtn}
                onClick={() => {
                  if (restTime === 0) return;
                  triggerTapFeedback();
                  setTimerPlaying((p) => !p);
                }}
                title="Pause/Play"
                disabled={restTime === 0}
                style={{ opacity: restTime === 0 ? 0.3 : 1, cursor: restTime === 0 ? "default" : "pointer" }}
              >
                {timerPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                type="button"
                className={styles.timerClose}
                onClick={closeTimer}
                title="Close Timer"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeLogItem && (
          <motion.div
            className={styles.logModalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.logModal}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3>Log: {activeLogItem}</h3>
              <p>Top Set Weight x Reps</p>
              <input
                autoFocus
                type="text"
                value={logInput}
                onChange={(e) => {
                  let val = e.target.value;
                  if (
                    val.length > logInput.length &&
                    val.toLowerCase().endsWith("kg")
                  ) {
                    val += " x ";
                  }
                  setLogInput(val);
                }}
                placeholder="100kg x 5"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSaveLog();
                }}
                className={styles.logInput}
              />
              <div className={styles.logModalActions}>
                <button
                  type="button"
                  onClick={() => {
                    triggerTapFeedback();
                    setActiveLogItem(null);
                  }}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveLog}
                  className={styles.saveBtn}
                >
                  Save Set
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
          Built on progressive overload, volume mastery, and the
          compound-to-isolation balance that actually yields results. Eliminate
          the noise.
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
            <a
              key={section.id}
              href={`#${section.id}`}
              className={styles.navLink}
              onClick={triggerTapFeedback}
            >
              {section.title.replace(" Day", "")}
            </a>
          ))}
          <div className={styles.navSeparator} />
          <a href="#rules" className={styles.navLink} onClick={triggerTapFeedback}>
            Rules
          </a>
          <a href="#diet" className={styles.navLink} onClick={triggerTapFeedback}>
            Diet
          </a>

          {/* Workout Mode Toggle */}
          <div className={styles.navSeparator} />
          <button
            type="button"
            className={styles.workoutToggleBox}
            onClick={() => {
              triggerTapFeedback();
              setIsWorkoutMode((value) => !value);
            }}
            title="Keeps screen awake during workout"
          >
            <span>Workout Mode</span>
            <div
              className={`${styles.switch} ${isWorkoutMode ? styles.switchActive : ""}`}
            >
              <div className={styles.switchHandle} />
            </div>
          </button>

          {/* Theme Toggle */}
          <div className={styles.navSeparator} />
          <ToggleTheme />
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
                    <th>Rest</th>
                    <th>Execution Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row) => (
                    <tr key={row[0]}>
                      <td>
                        <div className={styles.exerciseNameRow}>
                          <a
                            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(row[0] + " exercise proper form")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ytLink}
                            title={`Search ${row[0]} form on YouTube`}
                            onClick={triggerTapFeedback}
                          >
                            {row[0]}
                            <ExternalLink
                              size={14}
                              className={styles.ytIcon}
                              strokeWidth={2}
                            />
                          </a>
                          <button
                            type="button"
                            className={styles.logBtn}
                            onClick={() => openLogPrompt(row[0])}
                            title="Log progression"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        {logs[row[0]] && (
                          <div className={styles.logTag}>
                            Last: {logs[row[0]]}
                          </div>
                        )}
                      </td>
                      <td className={styles.tdCenter}>
                        <span className={styles.setsIndicator}>{row[1]}</span>
                      </td>
                      <td className={`${styles.tdCenter} ${styles.repsText}`}>
                        {row[2]}
                      </td>
                      <td className={styles.tdCenter}>
                        <button
                          type="button"
                          className={styles.restBtn}
                          onClick={() => startTimer(parseInt(row[3]))}
                        >
                          <Timer size={14} className={styles.restIcon} />
                          <span>
                            {parseInt(row[3]) >= 120
                              ? `${parseInt(row[3]) / 60}m`
                              : `${row[3]}s`}
                          </span>
                        </button>
                      </td>
                      <td className={styles.notesText}>{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        ))}

        {/* ... Rules ... */}
        {/* Same as before */}
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
                These aren't recommendations. This is what separates marginal
                gains from true transformation.
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

        <motion.section 
          variants={fadeIn} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <OneRepMaxCalculator />
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
            <div className={styles.iconWrap}>
              <UtensilsCrossed size={28} strokeWidth={1.5} />
            </div>
            <div className={styles.headerText}>
              <span className={styles.sectionTag}>Nutritionology</span>
              <h2 className={styles.sectionTitle}>Optimal Cut</h2>
              <p className={styles.sectionDesc}>
                1900–2100 kcal baseline. High protein, moderate carb, sustained
                energy.
              </p>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Phase / Time</th>
                  <th>Source</th>
                  <th className={styles.tdCenter}>Protein</th>
                  <th className={styles.tdRight}>Est. Kcal</th>
                </tr>
              </thead>
              <tbody>
                {dietMeals.map((meal) => (
                  <Fragment key={meal.meal}>
                    {meal.items.map((item, index) => (
                      <tr key={item[0]}>
                        {index === 0 ? (
                          <td
                            className={styles.mealPhase}
                            rowSpan={meal.items.length}
                          >
                            {meal.meal}
                          </td>
                        ) : null}
                        <td>
                          <div className={styles.foodName}>{item[0]}</div>
                          <div className={styles.foodQty}>{item[1]}</div>
                        </td>
                        <td className={`${styles.tdCenter} ${styles.repsText}`}>
                          {item[2]}
                        </td>
                        <td className={`${styles.tdRight} ${styles.notesText}`}>
                          {item[3]}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
                {/* Daily Totals */}
                <tr>
                  <td colSpan={2} style={{ paddingTop: "2rem" }}>
                    <strong>Daily Minimum Targets</strong>
                  </td>
                  <td
                    className={`${styles.tdCenter} ${styles.repsText}`}
                    style={{ paddingTop: "2rem" }}
                  >
                    {dailyTotals[0][1]}
                  </td>
                  <td
                    className={`${styles.tdRight} ${styles.notesText}`}
                    style={{ paddingTop: "2rem", fontWeight: "700" }}
                  >
                    {dailyTotals[1][1]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

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

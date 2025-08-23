'use client'

import { motion, AnimatePresence } from 'framer-motion';
import styles from './popUp.module.css';

export default function Popup({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {/* <h2 className={styles.title}>Hey! I’m a popup 😎</h2> */}
                        <p className={styles.content}>
                            Work in progress
                        </p>
                        <button className={styles.closeBtn} onClick={onClose}>
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

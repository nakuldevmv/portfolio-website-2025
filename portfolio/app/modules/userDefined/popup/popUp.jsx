'use client'
import { motion, AnimatePresence } from 'framer-motion';
import styles from './popUp.module.css';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useTheme } from 'next-themes';
import { CrossIcon,ArrowCurved } from '@/app/customIcon';



export default function Popup({ isOpen, onClose }) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const { resolvedTheme } = useTheme();
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

                        <div className={styles.Btnsheader}>

                            <a className={styles.downloadBtn} href='https://raw.githubusercontent.com/nakuldevmv/Resume/main/resume.pdf'>
                                <div className={styles.arr1}><ArrowCurved/></div>
                                <div className={styles.arr2}><ArrowCurved /></div>

                            </a>
                            <button className={styles.closeBtn} onClick={onClose}>
                                <CrossIcon />
                            </button>
                        </div>



                        <div className={styles.pdfViewer}>
                            <Worker  workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
                                <Viewer
                                    fileUrl='/resume.pdf'
                                    // plugins={[defaultLayoutPluginInstance]}
                                    defaultScale={SpecialZoomLevel.PageFit}
                                    theme={resolvedTheme}
                                />
                            </Worker>
                        </div>





                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
'use client'
import { motion, AnimatePresence } from 'framer-motion';
import styles from './popUp.module.css';
import { CrossIcon, ArrowCurved } from '@/app/customIcon';
import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Popup({ isOpen, onClose }) {
    const [numPages, setNumPages] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);

    const onDocumentLoadSuccess = useCallback(({ numPages }) => {
        setNumPages(numPages);
        setIsLoading(false);
        setLoadError(false);
    }, []);

    const onDocumentLoadError = useCallback(() => {
        setIsLoading(false);
        setLoadError(true);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => e.target === e.currentTarget && onClose()}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ scale: 0.88, opacity: 0, y: 24 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.88, opacity: 0, y: 24 }}
                        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    >
                        {/* Header */}
                        <div className={styles.Btnsheader}>
                            <div className={styles.headerLeft}>
                                <span className={styles.resumeLabel}>RESUME</span>
                            </div>
                            <div className={styles.headerRight}>
                                <a
                                    className={styles.downloadBtn}
                                    href='/Nakul_Dev_M_V_Resume.pdf'
                                    download
                                    title="Download Resume"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 3v13M7 11l5 5 5-5" />
                                        <path d="M5 20h14" />
                                    </svg>
                                </a>
                                <button className={styles.closeBtn} onClick={onClose} title="Close">
                                    <CrossIcon />
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className={styles.headerDivider} />

                        {/* PDF Viewer */}
                        <div className={styles.pdfViewer}>
                            {isLoading && (
                                <div className={styles.loaderContainer}>
                                    <div className={styles.loader} />
                                    <span className={styles.loaderText}>Loading resume…</span>
                                </div>
                            )}

                            {loadError && (
                                <div className={styles.errorContainer}>
                                    <span className={styles.errorText}>Failed to load PDF</span>
                                </div>
                            )}

                            <Document
                                file="/Nakul_Dev_M_V_Resume.pdf"
                                onLoadSuccess={onDocumentLoadSuccess}
                                onLoadError={onDocumentLoadError}
                                className={styles.pdfDocument}
                                loading={null}
                            >
                                {!isLoading && !loadError && (
                                    <div className={styles.pagesGrid}>
                                        {Array.from({ length: numPages }, (_, i) => (
                                            <motion.div
                                                key={`page_${i + 1}`}
                                                className={styles.pageWrapper}
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.08, duration: 0.3 }}
                                            >
                                                <div className={styles.pageLabel}>Page {i + 1}</div>
                                                <Page
                                                    pageNumber={i + 1}
                                                    width={800}
                                                    scale={typeof window !== 'undefined' ? (window.devicePixelRatio || 2) : 2}
                                                    renderAnnotationLayer={true}
                                                    renderTextLayer={true}
                                                    className={styles.pdfPage}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </Document>
                        </div>

                        {/* Footer */}
                        {numPages && !isLoading && (
                            <div className={styles.footer}>
                                <span className={styles.footerText}>
                                    {numPages} {numPages === 1 ? 'page' : 'pages'}
                                </span>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
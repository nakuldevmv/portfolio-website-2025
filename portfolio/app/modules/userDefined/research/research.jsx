'use client';
import { useRef } from 'react';
import style from './research.module.css';
import Button from '../buttons/projectbtn/button';

const paper = {
  title: "Design and Deployment of a Decentralized Blockchain-as-a-Service Framework for Tamper-Resistant Electronic Voting Systems",
  authors: ["J Arun", "V.P. Leena", "MV Nakul Dev", "P Aparna", "Baisil Jose", "V Aravind Mohan"],
  conference: "2025 International Conference on Intelligent Computing, Information and Control Systems (ICOIICS)",
  conferenceShort: "ICOIICS 2025",
  location: "Lalitpur, Nepal",
  dates: "19–21 November 2025",
  publisher: "IEEE",
  doi: "10.1109/ICOIICS67115.2025.11390111",
  addedToXplore: "24 February 2026",
  abstract: "Electronic voting systems have a perpetual dilemma in finding a harmonious balance between security, privacy, and fairness with the transparency and flexibility of modern digital technologies. This work examines the use of Blockchain-as-a-Service (BaaS) for the deployment of a distributed electronic voting system, proposing a tamper-resistant, cost-effective, and transparent voting infrastructure leveraging distributed ledger technologies.",
  keywords: ["Blockchain", "BaaS", "E-Voting", "Distributed Ledger", "Decentralized", "Security", "Smart Contracts"],
  link: "https://ieeexplore.ieee.org/document/11390111",
};

export default function Research() {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;   // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5;   // -0.5 to 0.5
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) scale(1.01)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
  }
  return (
    <section className={style.researchSection}>
      <div className={style.titleRow}>
        <h1 className={style.sectionTitle}>Research &amp; Publications</h1>
      </div>

      <div
        className={style.card}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top row: badge + meta + CTA button */}
        <div className={style.cardTop}>
          <div className={style.cardTopLeft}>
            <div className={style.publisherBadge}>
              <span className={style.ieeeIcon}>IEEE</span>
              <span className={style.publisherLabel}>Published</span>
            </div>
            <div className={style.meta}>
              <span className={style.metaItem}>
                <span className={style.metaDot} />
                {paper.conferenceShort}
              </span>
              <span className={style.metaSep}>✦︎</span>
              <span className={style.metaItem}>{paper.dates}</span>
              <span className={style.metaSep}>✦︎</span>
              <span className={style.metaItem}>{paper.location}</span>
            </div>
          </div>
          <div className={style.cardTopRight}>
            <Button label="IEEE Xplore" onClick={() => { window.open(paper.link, '_blank') }} />
          </div>
        </div>

        {/* Title */}
        <h2 className={style.paperTitle}>{paper.title}</h2>

        {/* Authors */}
        <div className={style.authors}>
          {paper.authors.map((a, i) => (
            <span key={i} className={style.author}>
              {a === "MV Nakul Dev" ? <strong>{a}</strong> : a}
              {i < paper.authors.length - 1 && <span className={style.authorSep}> · </span>}
            </span>
          ))}
        </div>

        {/* Abstract */}
        <div className={style.abstractBlock}>
          <span className={style.abstractLabel}>Abstract</span>
          <p className={style.abstract}>{paper.abstract}</p>
        </div>

        {/* Keywords */}
        <div className={style.keywords}>
          {paper.keywords.map((kw, i) => (
            <span key={i} className={style.keyword}>{kw}</span>
          ))}
        </div>

        {/* Footer: DOI only */}
        <div className={style.cardFooter}>
          <span className={style.doiLabel}>
            DOI: <span className={style.doiValue}>{paper.doi}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

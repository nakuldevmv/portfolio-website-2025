'use client'
import Image from 'next/image';
import styles from './card.module.css';
import { useTransform, motion, useScroll, number } from 'framer-motion';
import { useRef } from 'react';
import Button from '../../buttons/projectbtn/button';

const Card = ({ i, title, description, src, num, liveLink, github, color, progress, range, targetScale }) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
        className={styles.card}
      >
        <div className={styles.cardBody}>




          <div className={styles.titlebtnContainer}>
            <div className='flex'>
              <h1>{num}</h1>
              <div className={styles.titleContainer}>
                <h2>{title}</h2>
                <h3>{description}</h3>
              </div>
            </div>

            <div className={styles.btnContainer}>
              <Button label='Github' onClick={() => { window.open(github, '_blank') }} />
              <div style={{ height: '5px' }}></div>
              <Button label='Live' onClick={() => { window.open(liveLink, '_blank') }} />

            </div>

          </div>




          <div className={styles.outerBox}>
            <div className={styles.VideoBox}>
              <motion.div
                className={styles.inner}
                style={{ scale: imageScale }}
              >
                <video
                  src="/src.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className={styles.videoPlay}

                />

              </motion.div>
            </div>
            <div className={styles.sideBox}>

              <div className={styles.box1}>
                                <h3>{description}</h3>

              </div>
              <div className={styles.box2}>
                {/* Video Card */}
              </div>
            </div>
          </div>






        </div>

      </motion.div>
    </div>
  )
}

export default Card
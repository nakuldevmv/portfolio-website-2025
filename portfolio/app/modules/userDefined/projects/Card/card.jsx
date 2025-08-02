'use client'
import Image from 'next/image';
import styles from './card.module.css';
import { useTransform, motion, useScroll, number } from 'framer-motion';
import { useRef } from 'react';
import Button from '../../buttons/projectbtn/button';

const Card = ({ i, title, description, src, num, color, progress, range, targetScale }) => {

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
          <h1>{num}</h1>
          <div className={styles.titlebtnContainer}>
            <div className={styles.titleContainer}>
              <h2>{title}</h2>
              <h3>{description}</h3>
            </div>
            <div className={styles.btnContainer}>
              <Button label='Github Repo'/>
              <div style={{height:'5px'}}></div>
              <Button label='Live Project'/>

            </div>

          </div>



          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{ scale: imageScale }}
            >
              {/* here there is a effect of zoom out in for images or video */}
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Card
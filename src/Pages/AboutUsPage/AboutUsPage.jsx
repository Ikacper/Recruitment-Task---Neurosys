import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutUsPage.module.css';

let text = 'Guillaume Alric and Jonathan Alric began making music together when Jonathan, who was at film school in Brussels, asked Guillaume to work with him on a music video soundtrack. On 7 April 2017 they released their debut EP, Territory, on the new Animal 63 label (headed by management and publishing company Savoir Faire and Believe Digital). The EP\'s six tracks included "Virile" and "Territory." Their "Territory" music video, released in February 2017, produced and directed by themselves, won the Film Craft Grand Prix at the 2017 Cannes Lions International Festival of Creativity, Best Director at the Berlin Music Video Awards and the Best International Dance Video UK MVA.'

const sentence = {
  hidden: { },
  visible: { 
    transition: {
      staggerChildren: 0.04
    }
  }
}

const letter = { 
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
 }

function AboutUsPage() {
  return (
    <div className={styles.wrapper}>
      <motion.h4
        className={styles.text}
        variants={sentence}
        initial="hidden"
        animate="visible">
        {text.split('').map((char, index) => {
          return (
            <motion.span
            key={char+'-'+index}
            variants={letter} 
            >
              {char}
            </motion.span>
          )
        })} 
      </motion.h4>        
    </div>
  )
}

export default AboutUsPage

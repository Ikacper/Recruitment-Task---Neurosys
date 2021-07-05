import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';
import PlayButton from '../../assets/svg/PlayButton/PlayButton';
import PauseButton from '../../assets/svg/PauseButton/PauseButton';

let title = 'The Blaze'

const sentence = {
  hidden: { },
  visible: { 
    transition: {
      staggerChildren: 0.3
    }
  }
}

const letter = { 
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 1 }
  }
 }

function AboutUsPage() {

  const [play, setPlay] = useState(false)
  const [delay, setDelay] = useState(true)
  const [audio] = useState(new Audio('/theblaze.mp3'))
  //let audio = 

  function handleClickPlay () {
    audio.play()
    setPlay(!play)
    setDelay(false)
  }

  function handleClickPause () {
    audio.pause()
    setPlay(!play)
  }

  return (
    <>
    <motion.div 
    className={styles.titleWrapper}

    >
      <motion.h1
      className={styles.title}
      variants={sentence}
      initial="hidden"
      animate="visible">
      {title.split('').map((char, index) => {
        return (
          <motion.span
          key={char+'-'+index}
          variants={letter} 
          >
            {char}
          </motion.span>
        )
      })} 
      </motion.h1> 
      {play ? <PauseButton handleClickPause={handleClickPause}/> : <PlayButton handleClickPlay={handleClickPlay} delay={delay}/>}
    </motion.div>
    </>
  )
}

export default AboutUsPage

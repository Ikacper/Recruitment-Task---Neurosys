import React from 'react';
import { motion } from 'framer-motion';
import styles from './PlayButton.module.css';
import PropTypes from 'prop-types';

export default function PlayButton({handleClickPlay, delay}) {

  return (
    <>
    <motion.svg x="0px" y="0px" width="50px" height="50px" viewBox="0 0 163.861 163.861" 
      onClick={handleClickPlay}
      className={styles.playBtn}
      initial={{ opacity: 0 }}
      animate={{opacity: 1}}
      transition={ delay ? {
        delay: 3.3,
        duration: 1
      } : {duration: 1}}
    >
      <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275 c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"/>
    </motion.svg>
    </>
  )
}

PlayButton.propTypes = {
  handleClickPlay: PropTypes.func,
  delay: PropTypes.bool
}
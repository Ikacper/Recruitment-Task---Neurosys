import React from 'react';
import styles from './modalTemplate.module.css';

function modalFormSent({setModal, modal}) {

  return (
    <div className={styles.modal}>
      <span className={styles.text}>
        The message was sent!
      </span>
      <button className={styles.closeBtn} onClick={() => setModal(!modal)}>close</button>
    </div>
  )
}

export default modalFormSent
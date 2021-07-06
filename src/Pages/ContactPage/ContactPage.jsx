import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import { Formik, Form , Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import questionsAndAnswers from '../../data/questionsAndAnswers.json';
import Modal from '../../modals/modalFormSent';

const initialValues = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  message: ''
}



const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  email: Yup.string().required('email is required').email('Wrong email'),
  phone: Yup.string().required('Phone number is required').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,'Phone number is incorrect'),
  message: Yup.string().required('Message is required')
})

function ContactPage() {

  const [displayForm, setdisplayForm] = useState(false)
  const [displayFormButton, setDisplayFormButton] = useState(false)
  const [selection, setSelection] = useState(Math.floor(Math.random()*questionsAndAnswers.length))
  const [modal, setModal] = useState(false);

  const onSubmit = (values, {resetForm}) => {
    setdisplayForm(!displayForm)
    resetForm()
    setModal(!modal)
    setDisplayFormButton(!displayFormButton)
  }
 
  const handleClickForm = () => {
    setdisplayForm(!displayForm)
  }

  const handleClickAnswer = (answer) => {
    if(answer === questionsAndAnswers[selection].correct){
      setDisplayFormButton(true)
    }
    else {
      setSelection(Math.floor(Math.random()*questionsAndAnswers.length))
    }
  }

  return (
    <>
      <div className={styles.contact}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
        <Form className={`${styles.wrapper} ${displayForm ? styles.visible : ''} `} >
          Name:
          <Field type='text' id='name' name='name' className={styles.textInput} />
          <ErrorMessage name='name' className={styles.error} component='div' />
          Surname:
          <Field type='text' id='surname' name='surname' className={styles.textInput} />
          <ErrorMessage name='surname' className={styles.error} component='div' />
          Email:
          <Field type='text' id='email' name='email' className={styles.textInput} />
          <ErrorMessage name='email' className={styles.error} component='div' />
          Phone:
          <Field type='text' id='phone' name='phone' className={styles.textInput} />
          <ErrorMessage name='phone' className={styles.error} component='div' />
          Message:
          <Field as='textarea' id='message' name='message' className={styles.textArea} />
          <ErrorMessage name='message' className={styles.error} component='div' />

          <div className={styles.question}>{questionsAndAnswers[selection].question }</div>
          <div className={`${styles.answersWrapper} ${displayFormButton ? styles.disable : ''} `}>
            {
              questionsAndAnswers[selection].answers.map( (answer, index) => {
                return (
                  <div onClick={() => handleClickAnswer(answer)} key={index} className={styles.answer}>
                    {answer}
                  </div>
                )
              })
            }
          </div>

          { displayFormButton ? <input type='submit' value='Send' className={styles.sendMsgBtn}></input> : '' }
        </Form>
      </Formik>
      { displayForm ? '': <button onClick={handleClickForm} className={styles.contactBtn}>Contact</button> }
      </div>
      <div onClick={handleClickForm} className={displayForm ? styles.background : ''}></div>       
      { modal ? <Modal setModal={setModal} modal={modal}/> : '' }   
    </>
  )
}

export default ContactPage

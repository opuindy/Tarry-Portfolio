import React, { useState, useEffect } from 'react';
import styles from './form.module.scss';
import { validateForm } from './validateForm';
import { motion } from 'framer-motion';
import api from '../../api/messages';

const Form = () => {
  const [response, setResponse] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setResponse({ ...response, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(response));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      const message = {
        id: new Date().getTime().toString().slice(-4),
        ...response,
      };

      const submitMessage = async () => {
        const message = {
          id: new Date().getTime().toString().slice(-4),
          ...response,
        };
        try {
          const response = await api.post('/messages', message);
          setResponse({ ...response, name: '', email: '', message: '' });
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      };
      submitMessage();
    }
  }, [formErrors, isSubmitting, response]);

  return (
    <form className={styles.form}>
      <div className={styles.form__container}>
        <label htmlFor='name'>
          Your Name <span className={styles.form__span}>{formErrors.name}</span>
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={response.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.form__container}>
        <label htmlFor='email'>
          Your Email{' '}
          <span className={styles.form__span}>{formErrors.email}</span>
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={response.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.form__container}>
        <label htmlFor='message'>
          Your Message{' '}
          <span className={styles.form__span}>{formErrors.message}</span>
        </label>
        <textarea
          id='message'
          name='message'
          rows='13'
          cols='50'
          value={response.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <motion.div
        className={styles.form__buttonContainer}
        whileTap={{ scale: 0.8 }}
        whileHover={{ cursor: 'pointer' }}
      >
        <button
          type='submit'
          className={styles.form__button}
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </motion.div>
    </form>
  );
};

export default Form;

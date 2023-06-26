import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import './login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError('Please enter a valid phone number.');
      return;
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');

    if (digitsOnly.length !== 10) {
      return false;
    }

    return true;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  function con() {
    alert('Logged In Successfully');
  }

  return (
    <div className='login'>
      <div className='image'>
        <img src='logo2.png' alt='logo' width='150' height='100'></img>
      </div>
      <p>
        <b>Let's Get Started</b>
        <br />
        Enter your mobile number to sign up/sign in to your E-learn's account
      </p>
      <br />
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <div className='name1'>
            <label htmlFor='name'>Name:</label>
            <br />
            <input
              type='text'
              id='name'
              name='name'
              className='form-control'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <br />
          <div className='form-phno'>
            <label htmlFor='phoneNumber'>Phone Number:</label>
            <br />
            <input
              type='text' maxLength="10" size="10"
              id='phoneNumber'
              name='phoneNumber'
              className={`form-control ${phoneNumberError && 'error'}`}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            {phoneNumberError && <div className='error-message'>{phoneNumberError}</div>}
          </div>
        </div>
        <div className='btn'>
          <button onClick={con}>Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

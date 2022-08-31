import { useState } from 'react';
import { Link } from 'react-router-dom'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.util';

import './sign-up.style.scss';

import { FormInputSignUp } from '../form-input/sign-up/sign-up.component';
import { Button } from '../button/button.component';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  
export const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        alert('passwords do not match');
        return;
      }
  
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('Cannot create user, email already in use');
        } else {
          console.log('user creation encountered an error', error);
        }
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
  
    return (
      <div className='sign-up-container'>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit}>
          <FormInputSignUp
            label='Display Name'
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value={displayName}
          />
  
          <FormInputSignUp
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />
  
          <FormInputSignUp
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
          />
  
          <FormInputSignUp
            label='Confirm Password'
            type='password'
            required
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
          />
           <div className='buttons-containers'>
              <Button type='submit' buttonType='submitButton'>Sign Up</Button>
           </div>
           <div className='nav-footer-form-sign'>
              <Link className='nav-link-sign nav-text-sign' to='../'>already have account?</Link>
          </div>
        </form>
      </div>
    );
  };
  
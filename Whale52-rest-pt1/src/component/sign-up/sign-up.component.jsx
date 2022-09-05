import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom'

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

   const navigate = useNavigate();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };

    const goToAuth = () => {
      navigate('/auth')
  }

  
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
        goToAuth()
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
        <h1>Sign-Up</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-container' >
          <div className='form-box'>
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
          </div>
          <div className='form-box'>
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
          </div>
          
          </div>
           <div className='buttons-containers'>
              <Button type='submit' buttonType='submitButton'>Sign Up</Button>
           </div>
           <div className='nav-footer-form-sign'>
              <Link className='nav-link-sign nav-text-sign' to='../'>Already have account? Sign-In now!</Link>
          </div>
        </form>
      </div>
    );
  };
  
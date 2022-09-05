import { useState , useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.util'

import { UserContext } from '../../context/user.context'

import './sign-in.style.scss'

import { Button } from '../button/button.component'
import { FormInputSignIn } from '../form-input/sign-in/sign-in.component';

const defaultFormFields = {
    email: '',
    password: '',
  };  

export const SignInForm = () => {

    const navigate = useNavigate();

    const [ formFields , setFormFields ] = useState(defaultFormFields)
    const { email , password } = formFields;

    // const {setCurrentUser} = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => { 
      await signInWithGooglePopup();
      goToHome()

      // const { user } = await signInWithGooglePopup();
      // console.log(user)
      // setCurrentUser(user);
  }

  const goToHome = () => {
      navigate('/')
  }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await signInAuthUserWithEmailAndPassword(
              email,
              password
            );
            resetFormFields();
            goToHome()

          } catch (error) {
            switch (error.code) {
              case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
              case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
              default:
                console.log(error);
            }
        }
    }  

    const handleChange = (event) => {
        const { name , value } = event.target;

        setFormFields({...formFields , [name]:value})
    }

    return (
        <div className='sign-in-container'>
          <h1>Sign-In</h1>
          <form onSubmit={handleSubmit}>
            <FormInputSignIn
              label='Email'
              type='email'
              required
              onChange={handleChange}
              name='email'
              value={email}
            />
    
            <FormInputSignIn
              label='Password'
              type='password'
              required
              onChange={handleChange}
              name='password'
              value={password}
            />
            <div className='buttons-container'>
              <Button type='submit' buttonType='submitButton'>Sign In</Button>
              <Button type='button' buttonType='googleSign' onClick={signInWithGoogle}>
                Google sign
              </Button>

            </div>
          </form>
          <div className='nav-footer-form-sign'>
              <Link className='nav-link-sign nav-text-sign' to='sign-up'>Don't have account?, register now!</Link>
          </div>
        </div>
      );
}
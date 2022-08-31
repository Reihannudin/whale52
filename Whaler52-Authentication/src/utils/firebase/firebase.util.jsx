import { initializeApp } from 'firebase/app'

import { 
    getAuth , 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword
} from 'firebase/auth'

import {
    getFirestore , 
    doc, 
    getDoc ,
    setDoc 
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDn4C0DukL_e2VhYiO9J8ZOtyBvToZ1_UA",
    authDomain: "whaler52-db.firebaseapp.com",
    projectId: "whaler52-db",
    storageBucket: "whaler52-db.appspot.com",
    messagingSenderId: "793753866357",
    appId: "1:793753866357:web:b738fd3127e507b1efa83c",
    measurementId: "G-C6W9R0Y0TJ"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth()

export const db = getFirestore()

// make sign in with google 
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt : 'select_account'
})

export const signInWithGooglePopup = () => {
    signInWithPopup(auth, googleProvider)
}

// createing user document from authentication
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    // if user is not auth return userAuth
    if(!userAuth) return;

    // define collection to store data
    const userDocRef = doc(db, 'users', userAuth.uid);

    // add to collection
    const userSnapshot = await getDoc(userDocRef);

    // check if user is not exists so can created account
    // if user is exists will return alert
    if(!userSnapshot.exists()){

        const { displayName , email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName ,
                email , 
                createdAt,
                ...additionalInformation
            });
        } catch(error){
            console.log(`error creating the user` , error.message)
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email , password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth , email , password)
}

export const signInAuthUserWithEmailAndPassword = async (email , password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}
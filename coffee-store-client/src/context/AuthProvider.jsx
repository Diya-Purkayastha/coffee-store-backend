import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({children}) => {

        //create user
        const createUser =(email, password)=>{
            return createUserWithEmailAndPassword(auth, email, password)
        }
        //delete user
        const deleteUserr = ()=>{
            const user = auth.currentUser
            if(user){
                return deleteUser(user)
            }else{
                return Promise.reject(new Error('No user'))
            }
        }
        //signIn
        const signInUser = (email, password)=>{
            return signInWithEmailAndPassword(auth, email, password)
        }

        const userInfo = {
            createUser,
            deleteUserr,
            signInUser
        }


    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;
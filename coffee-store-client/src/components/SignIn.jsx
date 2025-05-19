import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {
    const { signInUser } = use(AuthContext)
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());

        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                const singleInfo = {
                    email,
                    lastSignInTime: res.user?.metadata?.lastSignInTime
                }
                //update in server
                fetch('http://localhost:3000/users', {
                        method:'PATCH',
                        headers:{'content-type' : 'application/json'},
                        body:JSON.stringify(singleInfo)
                })
                 .then(res => res.json())
                        .then(data => {
                            console.log('after update', data);
                        })
                
            })
            .catch(er => {
                console.log(er.code);
            })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-md shrink-0 mx-auto my-12 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Sign In Now</h1>
                    <form onSubmit={handleForm} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
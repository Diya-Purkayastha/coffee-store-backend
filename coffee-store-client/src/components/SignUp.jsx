import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';


const SignUp = () => {

    const { createUser } = use(AuthContext)

    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...userProfile } = Object.fromEntries(formData.entries());
        // const email = formData.get('email');
        // const password = formData.get('password');

        //create user
        createUser(email, password)
            .then(res => {
                console.log(res.user);

                //send to server info
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your account is created",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(errorCode);

            });
    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-md shrink-0 mx-auto my-12 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Sign Up Now</h1>
                    <form onSubmit={handleForm} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                        <label className="label">Address</label>
                        <input type="text" name='address' className="input" placeholder="Address" />
                        <label className="label">Phone No</label>
                        <input type="text" name='phoneNo' className="input" placeholder="Phone No" />
                        <label className="label">Photo</label>
                        <input type="text" name='photourl' className="input" placeholder="Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
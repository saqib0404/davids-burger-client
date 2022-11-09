import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <form className='w-10/12 md:w-6/12 mx-auto p-4 mt-10 mb-16 rounded-lg border-2'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Please Sign Up</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered w-full" required />
                    
                    <label className="label">
                        <span className="label-text text-xl">Photo URL</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered w-full" required />
                    
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" required />

                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Password" className="input input-bordered w-full" required />
                    <p className='mt-2 ml-1'>Already have an account? Please <Link className='link text-blue-600' to='/login'>Login</Link>.</p>
                    <button className='btn font-semibold btn-warning mt-4'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
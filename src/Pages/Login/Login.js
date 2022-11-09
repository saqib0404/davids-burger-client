import React from 'react';

const Login = () => {
    return (
        <div>
            <form className='w-10/12 md:w-6/12 mx-auto md:h-96 border p-4 mt-10 mb-16'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Please Login</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />

                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Password" className="input input-bordered w-full" />

                    <button className='btn btn-warning mt-4'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
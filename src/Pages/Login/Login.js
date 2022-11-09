import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const [wrongPass, setWrongPass] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        login(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
            })
            .catch(e => {
                setWrongPass(e.message);
                console.log(e);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(e => {
                setWrongPass(e.message)
                console.log(e);
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin} className='w-10/12 md:w-6/12 mx-auto border-2 p-4 mt-10 mb-16 rounded-lg'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Please Login</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" required />

                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Password" className="input input-bordered w-full" required />
                    <p className='text-xl text-red-600'>{wrongPass}</p>
                    <p className='mt-2 ml-1'>Don't have an account? Please <Link className='link text-blue-600' to='/signup'>Sign Up</Link>.</p>
                    <button type='submit' className='btn btn-warning font-semibold mt-4'>Login</button>

                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline btn-secondary'><FaGoogle></FaGoogle>&nbsp; Login with Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
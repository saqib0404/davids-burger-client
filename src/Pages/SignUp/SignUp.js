import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [wrongPass, setWrongPass] = useState('');
    useTitle('Sign Up');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleCreateUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password, name, photoURL);

        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                handleUserUpdate(name, photoURL)
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(e => {
                console.log(e);
                setWrongPass(e.message);
            })
    }

    const handleUserUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(res => {
                console.log(res?.user);
            })
            .catch(e => {
                console.log(e);
            })
    }
    return (
        <div>
            <form onSubmit={handleCreateUser} className='w-10/12 md:w-6/12 mx-auto p-4 mt-10 mb-16 rounded-lg border-2'>
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
                    <p className='text-xl text-red-600'>{wrongPass}</p>
                    <p className='mt-2 ml-1'>Already have an account? Please <Link className='link text-blue-600' to='/login'>Login</Link>.</p>
                    <button className='btn font-semibold btn-warning mt-4'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
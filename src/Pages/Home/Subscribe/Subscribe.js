import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Subscribe = () => {
    const [matched, setMatched] = useState(false);
    const handleSubscribe = (e, subscribed) => {
        e.preventDefault();
        toast.success('Subscribed')
        e.target.reset();
        setMatched(false);
    }
    const handleConfirm = e => {
        const sub = e.target.value;
        if (sub === "Subscribe") {
            setMatched(true);
        } else {
            setMatched(false);
        }
    }


    return (
        <div className='mb-12 mx-auto w-11/12 md:w-7/12'>
            <Toaster></Toaster>
            < h3 className='font-semibold text-3xl text-center' > Add Subscribtion</h3 >
            <form onSubmit={handleSubscribe} className='my-4 mx-auto w-11/12 md:w-6/12'>
                <input type="email" placeholder="Type Your Email Here" className="input input-bordered mb-2 input-warning w-full" required />
                <input onChange={handleConfirm} name='subscribe' type="text" placeholder="Type 'Subscribe'" className="input input-bordered mb-2 input-warning w-full" />
                <button className='btn btn-warning w-full' disabled={!matched}>Subscribe</button>
            </form>
        </div >
    );
};

export default Subscribe;
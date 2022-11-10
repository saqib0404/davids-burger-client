import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MySingleService from './MySingleService';

const MyServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://devids-burger-server.vercel.app/services?sort=3`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [])

    return (
        <div className='mb-14'>
            {
                loading ?
                    <div className='h-screen flex justify-center items-center flex-col'>
                        <progress className="progress w-56"></progress> <br />
                        <h2 className='text-3xl'>Loading..</h2>
                    </div>
                    :
                    <>
                        <h2 className='text-center text-4xl font-bold'>My Services</h2>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 my-5 mx-20 md:mx-32  gap-x-3 gap-y-3'>
                            {services.map(service => <MySingleService
                                key={service._id}
                                service={service}
                            ></MySingleService>)}
                        </div>
                        <div className='flex justify-center'>
                            <Link to='/all-services'><button className='btn btn-error btn-outline w-32 font-bold'>See All</button></Link>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyServices;
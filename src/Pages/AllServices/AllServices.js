import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import MySingleService from '../Home/MyServices/MySingleService';

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle('Services');

    useEffect(() => {
        fetch(`https://devids-burger-server.vercel.app/services`)
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
                    </>
            }

        </div>
    );
};

export default AllServices;
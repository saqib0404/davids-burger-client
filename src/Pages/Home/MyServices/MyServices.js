import React, { useEffect, useState } from 'react';
import MySingleService from './MySingleService';

const MyServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=3`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])

    return (
        <div className='mb-14'>
            <h2 className='text-center text-4xl font-bold'>My Services</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-5 mx-20 md:mx-32  gap-x-3 gap-y-3'>
                {services.map(service => <MySingleService
                    key={service._id}
                    service={service}
                ></MySingleService>)}
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-error btn-outline w-32 font-bold'>See All</button>
            </div>
        </div>
    );
};

export default MyServices;
import React, { useEffect, useState } from 'react';
import MySingleService from '../Home/MyServices/MySingleService';

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
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
        </div>
    );
};

export default AllServices;
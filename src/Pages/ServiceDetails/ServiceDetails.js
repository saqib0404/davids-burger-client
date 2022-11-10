import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Context/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    useTitle('Details');

    const { description, image, price, title, _id, available, } = service;
    return (
        <section>
            <div className="card mx-10 md:mx-24 lg:mx-52 mt-5 mb-16 bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={image} >
                        <figure className="">
                            <img src={image} alt="Burger" className="rounded-xl" />
                        </figure>
                    </PhotoView>
                </PhotoProvider>
                {/* <figure><img src={image} alt="Burger" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className='text-lg'>Price: <span className='font-bold text-warning'>{price}</span></p>
                    <p>{description}</p>
                    <p>Available on: {available}</p>
                </div>
            </div>

            {/* Reviews */}
            <div className=' mb-10  mx-6 md:mx-20 lg:mx-48'>
                <h2 className='text-4xl font-semibold'>Reviews</h2>
                {
                    user?.uid ?
                        <button className='btn btn-primary'>Add Review</button>
                        :

                        <p className='py-4 px-6'>Please <Link to='/login' className='text-blue-600 underline font-semibold'>login</Link> to add a review</p>

                }
            </div>
        </section>
    );
};

export default ServiceDetails;
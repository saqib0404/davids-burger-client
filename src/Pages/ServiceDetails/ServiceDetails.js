import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useLocation } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewTable from './ReviewTable';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    // const [service, setService] = useState(useLoaderData());
    const { description, image, price, title, _id, available, } = service;
    useTitle('Details');
    const location = useLocation();

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?id=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [_id])

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const reviewText = form.reviewText.value;
        const photo = user?.photoURL
        const serviceName = title;
        const serviceImg = image;
        const review = {
            serviceId: _id,
            serviceName,
            serviceImg,
            name,
            email,
            photo,
            reviewText
        }

        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    window.location.reload();
                }
                console.log(data);
            })
            .catch(e => console.log(e))
    }


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


            {/* Modal */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleReview} className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <br />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' defaultValue={user?.email} readOnly type="email" className="input input-bordered input-primary w-full" />

                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' defaultValue={user?.displayName} readOnly type="text" className="input input-bordered input-primary w-full" />

                    <label className="label">
                        <span className="label-text">Service</span>
                    </label>
                    <input name='serviceName' defaultValue={title} readOnly type="text" className="input input-bordered input-primary w-full" />

                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <textarea name='reviewText' placeholder='Give your review here sir' type="text" className="input input-bordered input-primary w-full h-20" required />
                    <div className='flex justify-end'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>

            {/* Reviews */}
            <div className=' mb-10  mx-6 md:mx-20 lg:mx-48'>
                <h2 className='text-4xl font-semibold'>Reviews</h2>
                {
                    reviews.length > 0 ?
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(review => <ReviewTable
                                        key={review._id}
                                        service={service}
                                        review={review}
                                    ></ReviewTable>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <h4 className='m-4 text-xl '>No reviews were added</h4>
                }
                {
                    user?.uid ?
                        <label htmlFor="my-modal-3" className="btn btn-primary my-4 mx-6">Add Review</label>
                        :
                        <p className='py-4 px-6'>Please <Link to='/login' state={{ from: location }} className='text-blue-600 underline font-semibold'>login</Link> to add a review</p>
                }
            </div>
        </section>
    );
};

export default ServiceDetails;
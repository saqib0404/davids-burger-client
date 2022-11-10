import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const MySingleService = ({ service }) => {
    const { description, image, price, title, _id } = service;
    return (
        <div className="card bg-base-100 shadow-xl border-2">
            <PhotoProvider>
                <PhotoView src={image} >
                    <figure className="p-2">
                        <img src={image} alt="Burger" className="rounded-xl" />
                    </figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>{description.length > 100 ? description.slice(0, 90) + ' ...' : description}</p>
                <p>Price: <span className='font-semibold'>${price}</span></p>
                <div className="card-actions">
                    <Link to={`/all-services/${_id}`}><button className="btn btn-warning">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MySingleService;
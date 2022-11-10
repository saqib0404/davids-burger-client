import React from 'react';

const MySingleService = ({ service }) => {
    const { description, image, price, title, _id } = service;
    return (
        <div className="card bg-base-100 shadow-xl border-2">
            <figure className="p-2">
                <img src={image} alt="Burger" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>{description.length > 100 ? description.slice(0, 60) + ' ...' : description}</p>
                <p>Price: <span className='font-semibold'>{price}</span></p>
                <div className="card-actions">
                    <button className="btn btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MySingleService;
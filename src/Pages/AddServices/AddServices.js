import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddServices = () => {

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.name.value;
        const description = form.description.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
        const availableDays = form.availableDays.value;

        const service = {
            title: serviceName,
            price: price,
            available: availableDays,
            description: description,
            image: photoURL
        }

        fetch(`http://localhost:5000/services`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Added')
                }
                console.log(data);
            })
            .catch(e => console.log(e))
    }


    return (
        <form onSubmit={handleAddService} className='mx-8 md:mx-20 lg:mx-32 my-8 border-2 p-4'>
            <Toaster></Toaster>
            <h2 className='text-3xl font-semibold text-center mb-3'>Add Your Burger Service</h2>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Your Service Name</span>
                </label>
                <input name='name' type="text" placeholder="Service" className="input input-bordered w-full" required />
            </div>

            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Your Service Description</span>
                </label>
                <input name='description' type="text" placeholder="Description" className="input input-bordered w-full" required />
            </div>

            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Your Service Image</span>
                </label>
                <input name='photoURL' type="text" placeholder="PhotoURL" className="input input-bordered w-full" required />
            </div>

            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Your Service Price</span>
                </label>
                <input name='price' type="number" placeholder="$  price" className="input input-bordered w-full" required />
            </div>

            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Your Service Available on days</span>
                </label>
                <input name='availableDays' type="text" placeholder="available days" className="input input-bordered w-full" required />
            </div>
            <button type="submit" className='btn btn-primary my-2'>Add Service</button>
        </form>

    );
};

export default AddServices;
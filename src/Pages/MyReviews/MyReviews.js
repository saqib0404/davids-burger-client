import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewTable from '../ServiceDetails/ReviewTable';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [updateReviewId, setupdateReviewId] = useState('')
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])

    // Handle delete review
    const handleDeleteReview = id => {
        const proceed = window.confirm('Do you want to delete this review?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = reviews.filter(review => review._id !== id)
                        setReviews(remaining)
                        // window.location.reload();
                        toast.success('Review deleted')
                    }
                })
                .catch(e => console.log(e))
        }
    }

    // Update Review 
    const handleEditReview = id => {
        setupdateReviewId(id);
    }
    const handleUpdateReview = (e, id) => {
        e.preventDefault();
        const newReviewText = e.target.newReviewText.value;
        const updateMsg = {
            newReviewText
        }

        fetch(`http://localhost:5000/reviews/${updateReviewId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateMsg)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    toast.success('Review Updated')
                    window.location.reload();
                    // const remaining = orders.filter(odr => odr._id !== id);
                    // const approving = orders.find(odr => odr._id === id)
                    // approving.status = "Approved";

                    // const newOrder = [approving, ...remaining];
                    // setOrders(newOrder);
                }
            })
    }

    return (

        <div className=' mb-10 mt-5  mx-6 md:mx-20 lg:mx-48 h-screen'>
            {/* Modal */}
            < input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleUpdateReview} className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <br />
                    <label className="label">
                        <span className="label-text">Edit your review</span>
                    </label>
                    <input name='newReviewText' type="text" className="input input-bordered input-primary w-full" required />
                    <div className='flex justify-end my-2'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
            <Toaster></Toaster>
            {reviews.length < 1 ?
                <h2 className='text-4xl mb-2 text-center font-semibold'>No reviews Were Added</h2>
                :
                <>
                    <h2 className='text-4xl mb-2 text-center font-semibold'>My Reviews</h2>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Message</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(review => <ReviewTable
                                        key={review._id}
                                        author={true}
                                        handleDeleteReview={handleDeleteReview}
                                        handleEditReview={handleEditReview}
                                        review={review}
                                    ></ReviewTable>)
                                }
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </div>
    );
};

export default MyReviews;
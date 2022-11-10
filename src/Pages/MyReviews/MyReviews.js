import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewTable from '../ServiceDetails/ReviewTable';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
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
                        window.location.reload();
                        toast.success('Review deleted')
                    }
                })
                .catch(e => console.log(e))
        }
    }

    return (

        <div className=' mb-10 mt-5  mx-6 md:mx-20 lg:mx-48 h-screen'>
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
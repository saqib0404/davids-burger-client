import React, { useContext, useEffect, useState } from 'react';
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
    
    return (

        <div className=' mb-10  mx-6 md:mx-20 lg:mx-48'>
            <h2 className='text-4xl font-semibold'>Reviews</h2>
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
                                review={review}
                            ></ReviewTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;
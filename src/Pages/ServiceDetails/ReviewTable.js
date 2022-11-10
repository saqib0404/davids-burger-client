import React from 'react';

const ReviewTable = ({ review, author }) => {
    const { name, photo, reviewText, serviceName, serviceImg, } = review;
    // console.log(service);

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={author ? serviceImg : photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{author ? serviceName : name}</div>
                    </div>
                </div>
            </td>
            <td>{reviewText}</td>
            {
                author &&
                <>
                    <td><button className='btn btn-success'>Edit</button></td>
                    <td><button className='btn btn-error'>Delete</button></td>

                </>
            }
        </tr>
    );
};

export default ReviewTable;
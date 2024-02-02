import React from 'react';
import Review from './Review';


const ReviewList = ({ reviews}) => {
    return (
        <div>
            <h3>Reviews:</h3>
            {reviews.map((reveiw, index) => (
                <Review key={index} review={reveiw} />
            ))}

        </div>
    );
};

export default ReviewList;
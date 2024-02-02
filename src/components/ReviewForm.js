import React, { useState } from 'react';


const ReviewForm = ({ onReviewSubmit }) => {
    const [newReview, setNewReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDeffault();
        onReviewSubmit(newReview);
        setNewReview('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <textarea
            rows="4"
            cols="50"
            placeholder="Leave your review here..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            required
            />
            <br />
            <button type="submit"> Submit Review</button>
        </form>
    );
};
export default ReviewForm;
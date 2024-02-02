import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';


const Movie = ({ movie }) => {
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };
    
    const handleReviewSubmit = (newReview) => {
        setReviews([...reviews, newReview]);
    };

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={`${movie.title} poster`} />
            <p>{movie.synopsis}</p>
            <Stars rating={rating} onRatingChange={handleRatingChange} />
            <ReviewList reviews={reviews} />
            <ReviewForm onReviewSubmit={handleReviewSubmit} />
        </div>
    );
};

export default Movie;
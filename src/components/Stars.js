import React from 'react';


const Stars = ({ rating, onRatingChange }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div>
          {stars.map((star) => (
            <span
              key={star}
              onClick={() => onRatingChange(star)}
              style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
            >
              &#9733;
            </span>
          ))}
        </div>
      );
    };

    export default Stars;
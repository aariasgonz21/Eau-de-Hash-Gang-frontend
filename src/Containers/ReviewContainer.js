import React from 'react';
import RenderReview from '../Components/RenderReview';

const ReviewContainer = ({perfume}) => {
    let mappedReviews = perfume.reviews.map(review => {
      return <RenderReview key={review.id} review={review}/>
     }
    )

    return (
      <div>
        <h1>Reviews</h1>
        <div>{mappedReviews}</div>
      </div>
    )
}

export default ReviewContainer;

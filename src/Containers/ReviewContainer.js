import React from 'react';
import RenderReview from '../Components/RenderReview';

const ReviewContainer = (props) => {
  let { perfume } = props
    let mappedReviews = perfume.reviews.map(review => {
      return <RenderReview key={review.id} review={review} perfume={props.perfume} editSubmitHandler={props.editSubmitHandler}/>
     }
    )

    return (
      <div>
        <h1 className="review-main-title">Reviews</h1>
        <div>{mappedReviews}</div>
      </div>
    )
}

export default ReviewContainer;

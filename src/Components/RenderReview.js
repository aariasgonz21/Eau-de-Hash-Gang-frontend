import React, { Component } from 'react';
import EditReviewForm from './EditReviewForm'

class RenderReview extends Component {

  // let review = this.props.review;

  state = {
    clicked: false
  }

  editClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    return (
      <div className="review-container">
        <h3>{this.props.review.name}</h3>
        <p>{this.props.review.rating} out of 5</p>
        <h4>{this.props.review.review_text}</h4>
        <button className="ui teal button" onClick={this.editClick}>Edit Review</button>
        <button className="negative ui button">Delete Review</button>
        <div className={!this.state.clicked ? "hidden" : ""}>
          <EditReviewForm perfume={this.props.perfume} editSubmitHandler={this.props.editSubmitHandler} review={this.props.review}/>
        </div>
      </div>
    )
  }
  }

export default RenderReview;

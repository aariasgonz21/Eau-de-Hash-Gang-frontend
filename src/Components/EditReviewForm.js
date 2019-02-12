import React, { Component } from 'react';

class EditReviewForm extends Component {

  state ={
    name: this.props.review.name,
    rating: this.props.review.rating,
    reviewText: this.props.review.review_text,
    perfumeId: this.props.perfume.id,
    reviewId: this.props.review.id
  }
  
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="review-edit-form">
        <h1>Edit Review</h1>
          <form className="ui form" onSubmit={(e)=>this.props.editSubmitHandler(e, this.state)}>
          <div className="field">
            <label className="form-labels">Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler}/>
          </div>

          <div className="field">
            <label className="form-labels">Rating</label>
            <select name="rating" className="ui fluid dropdown" value={this.state.rating} onChange={this.changeHandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="field">
            <label className="form-labels">Review</label>
            <textarea rows="4" cols="50" placeholder="Review" name="reviewText" onChange={this.changeHandler} value={this.state.reviewText}/>
          </div>

          <button className="ui button" type="submit">Submit</button>
          </form>
      </div>
    );
  }

}

export default EditReviewForm;

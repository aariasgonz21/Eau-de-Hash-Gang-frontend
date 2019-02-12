import React, { Component } from 'react';

class ReviewForm extends Component {

  state={
    name: '',
    rating: 0,
    review: '',
    perfumeId: this.props.perfume.id
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Add a Review</h1>
        <form onSubmit={(e) => this.props.submitHandler(e, this.state)} className="ui form">

          <div className="field">
            <label className="form-labels">Name</label>
            <input type="text" name="name" placeholder="Name" onChange={this.changeHandler}/>
          </div>

          <div className="field">
            <label className="form-labels">Rating</label>
            <select name="rating" className="ui fluid dropdown" onChange={this.changeHandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="field">
            <label className="form-labels">Review</label>
            <textarea rows="4" cols="50" placeholder="Review" name="review" onChange={this.changeHandler}/>
          </div>

          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default ReviewForm;

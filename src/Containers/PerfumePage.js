import React, { Component } from 'react';
import PerfumeContainer from './PerfumeContainer'
import Cart from './Cart'

class PerfumePage extends Component {

  state = {
    perfumes: [],
    cartPerfumes: [],
  }

    componentDidMount(){
      fetch('http://localhost:3001/api/v1/perfumes')
      .then(res => res.json())
      .then(perfumes => this.setState({
        perfumes: perfumes
      }))
    }

    clickHandler = (perfume) => {
      this.setState({
        cartPerfumes: [...this.state.cartPerfumes, perfume]
      })
    }

    removeHandler = (perfume) => {
      let removePerfume = [...this.state.cartPerfumes].filter(cartPerfume => {
        return cartPerfume.id !== perfume.id
      })

      this.setState({
        cartPerfumes: removePerfume
      })
    }

    inputHandler = (e) => {
      this.setState({
        searchTerm: e.target.value
      })
    }

    submitHandler = (e, submission) => {
      e.preventDefault();
      let data = {
        name: submission.name,
        rating: submission.rating,
        review_text: submission.review,
        perfume_id: submission.perfumeId
      }
      let options = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(`http://localhost:3001/api/v1/perfumes/${submission.perfumeId}/reviews`, options)
      .then(res => res.json())
      .then(data =>
        {
          let perfs = [...this.state.perfumes]
          let foundPerf = perfs.find(perf => perf.id === submission.perfumeId)
          let reviews = [...foundPerf.reviews, data]
          foundPerf.reviews = reviews
          this.setState({
            perfumes: perfs
          })
        })

    }

    updateHandler = (review) => {
      console.log(review)
    }

  render() {
    console.log(this.state.perfumes)
    return (
      <div>
        <div className="landing-page">
          <h1 className="main-title">Eau De</h1>
          <img className='frame' src="./YeroldsFrame.svg"/>
          <h1 id="yerold">Yerold</h1>
        </div>
        <div className='ui grid'>
          <div className="twelve wide column grid">
            <PerfumeContainer submitHandler={this.submitHandler} clickHandler={this.clickHandler} updateHandler={this.updateHandler} perfumes={this.state.perfumes}/>
          </div>
          <div className="four wide column">
            <Cart cartPerfumes={this.state.cartPerfumes} removeHandler={this.removeHandler}/>
          </div>
        </div>
      </div>
    );
  }

}

export default PerfumePage;

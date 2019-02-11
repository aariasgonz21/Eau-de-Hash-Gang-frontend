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

  render() {
    return (
      <div>
        <div className="landing-page">
          <h1 className="main-title">Eau De</h1>
          <img className='frame' src="./YeroldsFrame.svg"/>
          <h1 id="yerold">Yerold</h1>
        </div>
        <div className='ui grid'>
          <div className="twelve wide column grid">
            <PerfumeContainer clickHandler={this.clickHandler} perfumes={this.state.perfumes}/>
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

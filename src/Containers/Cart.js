import React, { Component } from 'react';
import PerfumeCard from '../Components/PerfumeCard'

class Cart extends Component {

  render() {

    let cartPerfume = this.props.cartPerfumes.map(perfume => {
      return <PerfumeCard key={perfume.id} perfume={perfume} removeHandler={this.props.removeHandler}/>
    })

    return (
      <div className="cart-container">
        <h3 className="second-title">∙ Cart ∙</h3>
        <div className="main-cart">{cartPerfume}</div>
      </div>
    );
  }

}

export default Cart;

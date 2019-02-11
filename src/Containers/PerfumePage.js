import React, { Component } from 'react';
import PerfumeContainer from './PerfumeContainer'
import Cart from './Cart'

class PerfumePage extends Component {

  render() {
    return (
      <div>
        <div className="landing-page">
          <h1 className="main-title">Eau De</h1>
          <img className='frame' src="./YeroldsFrame.jpg"/>
          <h1 id="yerold">Yerold</h1>
        </div>

        <div className='ui grid'>
          <div className="twelve wide column grid">
            <PerfumeContainer perfumes={this.props.perfumes}/>
          </div>
          <div className="four wide column">
            <Cart perfumes={this.props.perfumes}/>
          </div>
        </div>
      </div>
    );
  }

}

export default PerfumePage;

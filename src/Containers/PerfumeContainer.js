import React, { Component } from 'react';
import PerfumeCard from '../Components/PerfumeCard'

class PerfumeContainer extends Component {


  render() {
    let cards = this.props.perfumes.map(perfume => {
      return <PerfumeCard key={perfume.id} perfume={perfume}/>
    })

    return (
      <div className="perfume-container">
        <h1 className="second-title"> perfumes </h1>
        <div className="ui grid main">{cards}</div>
      </div>
    );
  }

}

export default PerfumeContainer;

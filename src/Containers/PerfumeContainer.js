import React, { Component } from 'react';
import PerfumeCard from '../Components/PerfumeCard'

class PerfumeContainer extends Component {

  state= {
    searchTerm: ''
  }

  inputHandler = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  renderFilteredCards = () => {
    let filteredPerfumes = this.props.perfumes.filter(perfume => {
      const term = this.state.searchTerm.toLowerCase();
      return perfume.name.toLowerCase().includes(term)
    })

    return filteredPerfumes.map(perfume => {
        return <PerfumeCard key={perfume.id} perfume={perfume} clickHandler={this.props.clickHandler} submitHandler={this.props.submitHandler} updateHandler={this.props.updateHandler}/>
    })
  }

  render() {

    return (
      <div className="perfume-container">

        <form className="ui input" onSubmit={this.submitHandler}>
          <input onChange={this.inputHandler} type="text" placeholder="Search"/>
        </form>

        <h1 className="second-title">  ∙ Perfumes ∙ </h1>
        <div className="ui grid main">{this.renderFilteredCards()}</div>
      </div>
    );
  }

}

export default PerfumeContainer;

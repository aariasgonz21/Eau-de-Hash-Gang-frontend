import React, { Component } from 'react';
import PerfumePage from './Containers/PerfumePage'
import './App.css';

class App extends Component {
state = {
  perfumes: []
}

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/perfumes')
    .then(res => res.json())
    .then(perfumes => this.setState({
      perfumes: perfumes
    }))
  }

  render() {
    return (
      <div className="App">
        <PerfumePage perfumes={this.state.perfumes}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
state = {
  perfumes: []
}

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/perfumes')
    .then(res => res.json())
    .then(perfumes => console.log(perfumes))
    }

  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;

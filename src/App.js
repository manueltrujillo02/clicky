import React, { Component} from 'react';
import './App.css';
import dog from "./dogs.json";
import Navbar from "./components/Navbar/Navbar";


class App extends Component {
  state = {
    dog,
    clickDog: [],
    score: 0
  };
  render() {
    return (
      <div className="App">
      <Navbar>
      score={this.state.score}
      </Navbar>
     
  
        
     
     
      </div>
    );
  }
}

export default App;

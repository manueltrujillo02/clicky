import React, { Component} from 'react';
import './App.css';
import dog from "./dogs.json";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper"
import Card from "./components/Card"


class App extends Component {
  state = {
    dog,
    clickDog: [],
    score: 0
  };
  render() {
    return (
      <div>
        <Navbar>
        score={this.state.score}
        </Navbar>
      <Wrapper>
        {/* {this.state.dogs} */}
          <Card
          id={dog.id}
          image={dog.image}
          />
        
      </Wrapper>
  
        
     
     
      </div>
    );
  }
}

export default App;

import React, { Component} from 'react';
import dog from "./dogs.json";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import './App.css';


class App extends Component {
  state = {
    dog,
    clickedPuppyIds: [],
    score: 0
  };


  shuffleScoreCard = id => {
    let clickedPuppyIds = this.state.clickedPuppyIds;

    if(clickedPuppyIds.includes(id)){
      this.setState({ clickedPuppyIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedPuppyIds.push(id)

      if(clickedPuppyIds.length === 8){
        this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", clickedPuppyIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ dog, clickedPuppyIds, score: clickedPuppyIds.length, status: " " });

      for (let i = dog.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [dog[i], dog[j]] = [dog[j], dog[i]];
      }
    }
  }
  render() {
    return (
      <div>
        <Navbar>
        score={this.state.score}
        </Navbar>
      <Wrapper>
         {this.state.dogs}
           <Card
           shuffleScoreCard={this.shuffleScoreCard}
           id={dog.id}
           key={dog.id}
           image={dog.image}
           />

          
          
        
      </Wrapper>
  
        
     
     
      </div>
    );
  }
}

export default App;

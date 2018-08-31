import React, { Component } from 'react';
import AddBar from './AddBar';
import Display from './Display';
import Points from './Points';
import ActiveUser from './ActiveUser';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userScores: [],
      scores: [],
    }
  }

  handleAddUserScore = (userName) => {
    let userScores = [...this.state.userScores];
    let newUser = {
      name: userName,
      score: 0,
      selected: false,
    }
    userScores.push(newUser)
    this.setState({userScores})
  }

  handleAddPoint = (score) => {
    let scores = [...this.state.scores];
    scores.push(score)
    this.setState({scores})
  }

  handleActiveUser = (index) => {
    let userScores = [...this.state.userScores];
    for (let i=0; i<userScores.length; i++){
      userScores[i].selected = false;
    }
    userScores[index].selected = true;
    this.setState({userScores})
  }

  handleUpdateScore = (value) => {
    let userScores = [...this.state.userScores];
    let updateIndex = null;
    for (let i=0; i<userScores.length; i++){
      if (userScores[i].selected === true){
        updateIndex = i;
      }
    }
    let score = parseInt(value, 10);
    try {
      userScores[updateIndex].score += score;
      this.setState({userScores})
    }
    catch(err) {
      console.log('select an active user you moron!')
    }
  }

  render() {
    const { userScores, scores } = this.state;
    return (
      <React.Fragment>
      <div className="display">
      <AddBar handleAdd={this.handleAddUserScore}/>
      <Display userScores={userScores}/>
      </div>

      <div className="points">
      <AddBar handleAdd={this.handleAddPoint}/>
      <Points scores={scores} updateScore={this.handleUpdateScore}/>
      </div>

      <div className="active-user">
      <ActiveUser userScores={userScores} handleActiveUser={this.handleActiveUser} />
      </div>

      </React.Fragment>
    );
  }
}

export default App;

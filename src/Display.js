import React, { Component } from 'react'
import UserScore from './UserScore';

export default class Display extends Component {
  render() {
    const { userScores } = this.props;
    const userScoresDisplay = userScores.map(
        (item, index) => <div key={index}><UserScore name={item.name} score={item.score}/></div>
)
    return (
    <React.Fragment>
        {userScoresDisplay}
    </React.Fragment>
    )
  }
}

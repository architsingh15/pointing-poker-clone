import React, { Component } from 'react'

export default class ActiveUser extends Component {
  render() {
    const {userScores, handleActiveUser} = this.props;
    const userScoresList = userScores.map(
        (user, index) => {
        return (<div key={index}>
        <span onClick={() => handleActiveUser(index)} className="badge badge-secondary active-user-check">{user.name}
        </span>
        {user.selected && <i className="fas fa-check check"></i>}
        </div>);
        }
    )
    return (
      <div>
        {userScoresList}
      </div>
    )
  }
}

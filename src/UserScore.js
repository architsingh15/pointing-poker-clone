import React, { Component } from 'react'

export default class UserScore extends Component {
  render() {
      const { score, name } = this.props;
    return (
      <div>
        <span className="badge badge-primary user-score">{score}</span>
        <span className="badge badge-dark user-name">{name}</span>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Points extends Component {
  render() {
    const scoresList = this.props.scores.map(
        (value, index) => <button key={index} type="button" className="btn btn-secondary" 
        onClick={() => this.props.updateScore(value)}>{value}</button>
    )
    return (
        <div className="btn-toolbar points-group" role="toolbar">
            <div className="btn-group mr-2" role="group">
            {scoresList}
            </div>
        </div>
    )
  }
}

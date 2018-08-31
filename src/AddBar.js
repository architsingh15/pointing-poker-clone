import React, { Component } from 'react'

export default class AddBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

  render() {
    const { handleAdd } = this.props;
    const { value } = this.state
    return (
      <React.Fragment>
        <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
        <button type="button" className="btn btn-primary add-button" onClick={() => handleAdd(value)}>Add</button>
      </React.Fragment>
    )
  }
}

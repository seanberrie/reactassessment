import React, { Component } from 'react'

export default class CircleSelector extends Component {
  render () {
    return (
      <div>
        <div className={this.props.button === 'Selected' ? 'CircleSelector button.selected' : 'CircleSelector'}>
          <button onClick={this.props.onClick}>Circle 1 Selected</button>
          <button onClick={this.props.onClick}>Circle 2 Selected</button>
          <button onClick={this.props.onClick}>Circle 3 Selected</button>
          <button onClick={this.props.onClick}>Circle 4 Selected</button>
        </div>
      </div>
    )
  }
}

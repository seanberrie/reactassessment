import React, { Component } from 'react'

export default class Circles extends Component {
  render () {
    let { circle } = this.props
    return (
      <div>
        <div className={circle === 'Selected' ? 'Circles button.selected' : 'Circles'}>
          {circle.map((circle, i) => {
            return <div> ${i} </div>
          })}
        </div>
      </div>
    )
  }
}

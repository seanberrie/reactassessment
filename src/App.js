import React, { Component } from 'react'
import Circles from './Circles/index.js'
import CircleSelector from './CircleSelector/index.js'
import './App.css'

class App extends Component {
  state = {
    Circle: {
      c1: "Selected",
      c2: false,
      c3: false,
      c4: false

    },
    CircleSelector: {
      cs1: "Selected",
      cs2: false,
      cs3: false,
      cs4: false
    }
  }

  onClick = (e) => {
    this.setState({})
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>PROJECT 4 ASSESSMENT</header>
        <main>
          <CircleSelector onClick={this.onClick} button={this.state.CircleSelector}/>
          <Circles circle={this.state.Circle} />
        </main>
      </div>
    )
  }
}

export default App

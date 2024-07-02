// Write your code here

import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {timeElapsedInSeconds: 0}

  render() {
    const {timeElapsedInSeconds} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-con">
            <div className="timer-img-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p className="timer-para">Timer</p>
            </div>
            <h1 className="timer">00:00</h1>
            <div className="button-con">
              <button type="button" className="button button1">
                Start
              </button>
              <button type="button" className="button button2">
                Stop
              </button>
              <button type="button" className="button button3">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch

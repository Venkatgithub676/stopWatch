// Write your code here

import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {timeElapsedInSeconds: 0, timerRunning: false}

  timerRun = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
    console.log(1)
  }

  onClickStart = () => {
    this.timerId = setInterval(() => this.timerRun(), 1000)
    this.setState({timerRunning: true})
  }

  onClickStop = () => {
    clearInterval(this.timerId)
    console.log(this.timerId)
    this.setState({timerRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.timerId)
    this.setState({timeElapsedInSeconds: 0, timerRunning: false})
  }

  //   timerSeconds = () => {

  //   }

  render() {
    const {timeElapsedInSeconds, timerRunning} = this.state
    // this.timerSeconds()
    // console.log(timeElapsedInSeconds)
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    const mins = minutes > 9 ? minutes : `0${minutes}`
    const secs = seconds > 9 ? seconds : `0${seconds}`
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
            <h1 className="timer">
              {mins}:{secs}
            </h1>
            <div className="button-con">
              <button
                type="button"
                onClick={this.onClickStart}
                disabled={timerRunning}
                className="button button1"
              >
                Start
              </button>
              <button
                onClick={this.onClickStop}
                type="button"
                className="button button2"
              >
                Stop
              </button>
              <button
                onClick={this.onClickReset}
                type="button"
                className="button button3"
              >
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

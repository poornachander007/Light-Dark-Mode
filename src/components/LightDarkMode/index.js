// Write your code here

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {mode: 'dark'}

  changeToLightMode = () => {
    // this.setState(preState => (preState.mode: 'light'))
    this.setState({mode: 'light'})
  }

  changeToDarkMode = () => {
    // this.setState(preState => (preState.mode: 'dark'))
    this.setState({mode: 'dark'})
  }

  // this.setState(preState => (preState.mode: 'light'))
  // this.setState(preState => (preState.mode: 'dark'))

  renderComponent = () => {
    const {mode} = this.state
    console.log(mode)
    if (mode === 'dark') {
      return (
        <div className="dark_card_container">
          <h1 className="dark_heading">Click To Change Mode</h1>
          <button onClick={this.changeToLightMode} type="button">
            Light Mode
          </button>
        </div>
      )
    }
    return (
      <div className="light_card_container">
        <h1 className="light_heading">Click To Change Mode</h1>
        <button onClick={this.changeToDarkMode} type="button">
          Dark Mode
        </button>
      </div>
    )
  }

  render() {
    return <div className="page_container">{this.renderComponent()}</div>
  }
}
export default LightDarkMode

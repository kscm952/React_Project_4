// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="container">
        <div className="cardContainer">
          <div className="heading">
            <h1 className="mainHeading">
              Bob ate <span className="color">{mangoesCount}</span> mangoes{' '}
              <span className="color">{bananasCount}</span> bananas
            </h1>
          </div>

          <div className="bottomContainer">
            <div className="cardBody">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="image"
                alt="mango"
              />
              <div>
                <button
                  className="button"
                  onClick={this.eatMango}
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="cardBody">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="image"
                alt="banana"
              />
              <div>
                <button
                  className="button"
                  onClick={this.eatBanana}
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

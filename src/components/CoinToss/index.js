import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    resultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  toss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => ({total: prevState.total + 1}))
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        resultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({
        resultImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {resultImage, total, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="head-or-tail">Heads (or) Tails</p>
          <img src={resultImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.toss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{total}</p>
            <p className="count">Heads:{heads}</p>
            <p className="count">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

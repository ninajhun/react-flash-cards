import React from "react"
import { AppContext } from "./context"

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardSide: 'question',
      index: 0
    };
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this)
    this.flipCard = this.flipCard.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    this.context.setActiveCard(0)
  }

  nextCard() {
    if (this.state.index > this.context.cards.length - 1) {
      this.setState({

          cardSide: 'question',

        index: 0
      }, this.context.setActiveCard(0));
    } else {
      this.setState({

          cardSide: 'question',

        index: this.state.index + 1
      }, this.context.setActiveCard(this.state.index))
    }

  }



  previousCard() {
    // if (this.index === 0) {
    //   this.index = this.context.cards.length;
    //   this.context.setActiveCard(this.index)
    // }
    // this.index--
    // this.context.setActiveCard(this.index)
    // this.setState({
    //   cardSide: true  // need to add index to state. change side and index
    // })

    console.log('hi')
  }

  flipCard() {
    if (this.state.cardSide === 'question') {
      this.setState({
        cardSide: 'answer'
      })
    } else {
      this.setState({
        cardSide: 'question'
      })
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 37) {
      this.previousCard()
    }
    if (e.keyCode === 39) {
      this.nextCard()
    }
    if (e.keyCode === 32) {
      this.flipCard()
    }
  }

  render() {
    console.log(this.context.activeCard)
    console.log(this.state.index)
    // console.log(this.context.cards.length - 1)


    let card
    if (this.context.activeCard) {
      card = this.context.activeCard[this.state.cardSide]
    }

    return (
      <div onKeyDown={this.handleKeyDown} tabIndex="0" style={{ outline: 'none' }}>
        <div className="container">

          <div className="row align-items-center justify-content-center">
            <h1>Review Cards</h1>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className={`review-card d-flex align-items-center justify-content-around ${this.state.cardSide}`} >
              <i className="fas fa-chevron-left fa-4x" onClick={this.previousCard}></i>
              <div className="cardTextContainer d-flex align-items-center justify-content-around">
                <h1 className="cardText" onClick={this.flipCard}>{card}</h1>
              </div>
              <i className="fas fa-chevron-right fa-4x" onClick={this.nextCard}></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReviewCards.contextType = AppContext
export default ReviewCards

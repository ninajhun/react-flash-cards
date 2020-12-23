import React from "react"
import { AppContext } from "./context"

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        cardSide: 'question',
        index: 0
      }
    };
    // this.index = 0;
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this)
    this.flipCard = this.flipCard.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    this.context.setActiveCard(0) //or this.index?
  }

  nextCard() {
    if (this.state.card.index > this.context.cards.length - 1) {
      this.setState({
        card: {
          cardSide: 'question',
          index: 0
        }
      }, this.context.setActiveCard(this.state.card.index))
    }

      this.setState({
        card: {
          cardSide: 'question',
          index: this.state.card.index + 1
        }
      }, this.context.setActiveCard(this.state.card.index) )


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
    if (this.state.card.cardSide === 'question') {
      this.setState({
        card: {
          cardSide: 'answer'
        }
      })
    } else {
      this.setState({
        card: {
          cardSide: 'question'
        }
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
    let card

    if (this.context.activeCard) {
      card = this.context.activeCard[this.state.card.cardSide]
      console.log(this.context.activeCard[this.state.card.cardSide])
    }


    return (
      <div onKeyDown={this.handleKeyDown} tabIndex="0" style={{ outline: 'none' }}>
        <div className="container">

          <div className="row align-items-center justify-content-center">
            <h1>Review Cards</h1>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className={`review-card d-flex align-items-center justify-content-around ${this.state.card.cardSide}`} >
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

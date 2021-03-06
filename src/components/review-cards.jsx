import React from "react"
import { AppContext } from "./context"

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isQuestionSide: true
    };
    this.index = 0;
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this)
    this.flipCard = this.flipCard.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    this.context.setActiveCard(0) //or this.index?
  }

  nextCard() {
    if (this.index > this.context.cards.length - 1) {
      this.index = 0
      this.context.setActiveCard(this.index)
    }

    this.context.setActiveCard(this.index)
    this.index++
  }

  previousCard() {
    if (this.index === 0) {
      this.index = this.context.cards.length;
      this.context.setActiveCard(this.index)
    }
    this.index--
    this.context.setActiveCard(this.index)
  }

  flipCard() {
    if (this.state.isQuestionSide) {
      this.setState({
        isQuestionSide: false
      })
    } else {
      this.setState({
        isQuestionSide: true
      })
    }

  }

  handleKeyDown(e){
    if(e.keyCode === 37) {
      this.previousCard()
    }
    if (e.keyCode === 39){
      this.nextCard()
    }
    if(e.keyCode === 32){
      this.flipCard()
    }
  }

  render() {
    let activeCard = this.context.activeCard
    let card
    let cardSide

    if (this.state.isQuestionSide) {
      card = activeCard.question
      cardSide = "question"
    } else {
      card = activeCard.answer
      cardSide = "answer"
    }


    return (
      <div onKeyDown={this.handleKeyDown} tabIndex="0" style={ { outline: 'none'} }>
        <div className="container">

          <div className="row align-items-center justify-content-center">
            <h1>Review Cards</h1>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className={`review-card d-flex align-items-center justify-content-around ${cardSide}`} >
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

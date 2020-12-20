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

  render() {
    let activeCard = this.context.activeCard
    let card
    let cardSide

    if (this.state.isQuestionSide) {
      card = activeCard.question
      cardSide = "review-card question d-flex align-items-center justify-content-center"
    } else {
      card = activeCard.answer
      cardSide = "review-card answer d-flex align-items-center justify-content-center"
    }

    return (
      <div>
        <div className="container">

          <div className="row align-items-center justify-content-center">
            <h1>Review Cards</h1>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className={cardSide} onClick={this.flipCard}>
              <h1>{card}</h1>
            </div>

          </div>

        </div>


      </div>



    )
  }
}

ReviewCards.contextType = AppContext
export default ReviewCards


{/* <button type="button" className="btn btn-primary" onClick={this.previousCard}>Test previousCard </button>
    <button type="button" className="btn btn-primary" onClick= {this.nextCard}>Test Next Card</button> */}

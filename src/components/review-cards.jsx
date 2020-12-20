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


  render() {
    let activeCard = this.context.activeCard
    let card

    if (this.state.isQuestionSide) {
       card = activeCard.question
    } else {
       card = activeCard.answer
    }

    return (
      <div>
        <div className="container">

          <div className="row align-items-center justify-content-center">
            <h1>Review Cards</h1>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="review-card">
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

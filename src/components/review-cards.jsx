import React from "react"
import { AppContext } from "./context"

class ReviewCards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isQuestionSide: true
    };
    this.index = 0;
    this.nextCard = this.nextCard.bind(this)
  }

  componentDidMount(){
    this.context.setActiveCard(0)
  }

  nextCard(){
    if (this.index > this.context.cards.length - 1) {
      this.index = 0
    }
    this.context.setActiveCard(this.index)
    this.index++
  }




  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1 className="text-center">Review Cards</h1>
          </div>
          <div className="row">
            <button type="button" className="btn btn-primary" onClick= {this.nextCard}>Test Next Card</button>
          </div>
        </div>

      </div>

    )
  }
}

ReviewCards.contextType = AppContext
export default ReviewCards

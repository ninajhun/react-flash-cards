import React from "react"
import { AppContext } from "./context"

class ReviewCards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isQuestionSide: true
    }
    this.nextCard = this.nextCard.bind(this)
  }

  componentDidMount(){
    this.context.setActiveCard(0)
  }

  nextCard(){
    let index = 0
    if (index > this.context.cards.length - 1) {
      index = 0
    }
    this.setActiveCard(index)
    index++
  }




  render() {
    return <h1 className="text-center">Review Cards</h1>
  }
}

ReviewCards.contextType = AppContext
export default ReviewCards

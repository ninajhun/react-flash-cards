import React from "react"
import { AppContext } from "./context"

class ReviewCards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isQuestionSide: true
    }
  }

  componentDidMount(){
    this.context.setActiveCard(0)
  }




  render() {
    return <h1 className="text-center">Review Cards</h1>
  }
}

ReviewCards.contextType = AppContext
export default ReviewCards

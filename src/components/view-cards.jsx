import React from "react"
import { AppContext } from "./context";

class ViewCards extends React.Component {

  render() {
    const cards = this.context.cards

    const listCards = cards.map((card, index) => {
      return (
        <div className="col-4 mb-4 " key={index}>
          <div className="card h-100" >
            <div className="card-header">
              {card.question}
            </div>
            <div className="card-body">
              {card.answer}
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <div className="container">

          <div className="row align-items-center justify-content-center">
            <h1 className="text-center mb-4">My Cards</h1>
          </div>

          <div className="row">
            {listCards}
         </div>


        </div>
      </div>
    )
  }

}

ViewCards.contextType = AppContext

export default ViewCards

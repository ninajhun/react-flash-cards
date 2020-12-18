import React from "react"
import { AppContext } from "./context";

class ViewCards extends React.Component {

  render() {
    const cards = this.context.cards


    const listCards = cards.map((card) => {
      return (
        <div className="col-3 mb-4 h-100" key={card.index}>
          <div className="card" >
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
        <div className="container-fluid">

          <div className="row align-items-center justify-content-center">
            <h1 className="text-center">My Cards</h1>
          </div>

          <div className="deck">{listCards}</div>

        </div>
      </div>
    )
  }

}

ViewCards.contextType = AppContext

export default ViewCards

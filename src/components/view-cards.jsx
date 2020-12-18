import React from "react"
import { AppContext } from "./context";

class ViewCards extends React.Component {

  render() {
    const cards = this.context.cards


    const listCards = cards.map((card) =>
      <li key={card.index}>{card.question}</li>
    )

    return (
      <div>
        <h1 className="text-center">My Cards</h1>
        <ul>{listCards}</ul>
      </div>
    )
  }

}

ViewCards.contextType = AppContext

export default ViewCards

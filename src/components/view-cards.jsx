import React from "react"
import { AppContext } from "./context";

class ViewCards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isDeleteModalOpen: false
    }
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  onDeleteClick(){
    console.log('hi');
    if(!this.state.isDeleteModalOpen) {
      this.setState({
        isDeleteModalOpen: true
      })
    } else {
      this.setState({
        isDeleteModalOpen: false
      })
    }
  }

  render() {
    const cards = this.context.cards

    const listCards = cards.map((card, index) => {
      return (
        <div className="col-4 mb-4 " key={index}>
          <div className="card h-100" >
            <div className="card-header">
              <button type="button" className="close" aria-label="Close" onClick={this.onDeleteClick} style={ {outline:'none'} }>
                <span aria-hidden="true">&times;</span>
              </button>
              {card.question}
            </div>
            <div className="card-body">
              {card.answer}
            </div>
          </div>
        </div>
      )
    })


    let modal
    if(this.state.isDeleteModalOpen){
      modal = (
        <div className="delete-modal">
          <div className="modal-content">
            <h1>hiiii</h1>
          </div>
        </div>
      )
    } else {
      modal = null;
    }

    return (
      <div>
        <div className="container">
          {modal}

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

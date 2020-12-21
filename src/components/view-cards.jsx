import React from "react"
import { AppContext } from "./context";

class ViewCards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index = null;
      isDeleteModalOpen: false,
      deleteCardIndex: null
    }
    this.onDeleteIconClick = this.onDeleteIconClick.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }

  onDeleteIconClick(){
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

  deleteCard(){
    console.log('hi')

  }

  render() {
    const cards = this.context.cards

    const listCards = cards.map((card, index) => {
      return (
        <div className="col-4 mb-4 " key={index}>
          <div className="card h-100" >
            <div className="card-header">
              <button type="button" className="close" aria-label="Close" onClick={this.onDeleteIconClick} style={ {outline:'none'} }>
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
            <h4>Are you sure you want to delete this card?</h4>
            <h6>Q:</h6>
            <h6>A:</h6>

            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-outline-danger mb-2 mr-3" onClick={() => this.setState({isDeleteModalOpen: false})}>Cancel</button>
              <button type="button" className="btn btn-outline-primary mb-2" onClick={this.deleteCard}>Confirm</button>
            </div>
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

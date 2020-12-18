import React from 'react'
import ViewCards from './view-cards'
import ReviewCards from './review-cards'
import CreateCard from './create-card'
import Nav from './nav'
import { AppContext } from './context'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'create-card',
      cards: []
    }
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this)
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return (
          <AppContext.Provider value={ {addCard: this.addCard}}  >
            <CreateCard />
          </AppContext.Provider>
        )
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  saveCards() {
    let cardsJSON = JSON.stringify(this.state.cards)
    localStorage.setItem('flash-cards', cardsJSON)
  }

  addCard(card) {
    this.setState({
      cards: this.state.cards.concat([card])
    }, this.saveCards)
  }


  render() {
    console.log(localStorage.getItem('flash-cards'))


    return (
      <div>
        <Nav setView={this.setView} view={this.state.view} />
        { this.getView()}
      </div>
    );
  }

}

export default App

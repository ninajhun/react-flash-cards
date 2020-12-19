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
      view: 'review-cards',
      cards: [].concat(JSON.parse(localStorage.getItem('flash-cards'))),
      activeCard: null
    }
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
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
          <AppContext.Provider value={{ addCard: this.addCard }}  >
            <CreateCard setView={this.setView} />
          </AppContext.Provider>
        )
      case 'review-cards':
        return (
          <AppContext.Provider value={{ activeCard: this.state.activeCard , setActiveCard: this.setActiveCard }}>
            <ReviewCards />;
          </AppContext.Provider>
        )
      case 'view-cards':
        return (
          <AppContext.Provider value={{ cards: this.state.cards }}>
            <ViewCards />
          </AppContext.Provider>
        )
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

  setActiveCard(index) {
    this.setState({
      activeCard: this.state.cards[index]
    })

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

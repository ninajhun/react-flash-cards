import React from 'react'
import ViewCards from './view-cards'
import ReviewCards from './review-cards'
import CreateCard from './create-card'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'view-cards'
    }
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
  }

  setView(name){
    this.setState({
      view: name
    });
  }

  getView(name){
    switch(name) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <Review />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  // render() {
  //   return <h1 className="text-center">Flash Card App</h1>
  // }

  render() {
    return (
      <div>
        { this.getView(this.state.view)}
      </div>
    );
  }

}

export default App

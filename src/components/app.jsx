import React from 'react'
import ViewCards from './view-cards'
import ReviewCards from './review-cards'
import CreateCard from './create-card'
import Nav from './nav'


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

  getView(){
    switch(this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <ReviewCards />;
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
        <Nav setView = {this.setView} view = {this.state.view} />
        { this.getView()}
      </div>
    );
  }

}

export default App

import React from 'react'

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: "view-cards"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(view) {
    this.props.setView(view);
    this.setState({ isActive: view })
  }

  render() {

  return (
    <ul className="nav nav-pills justify-content-end mt-4">
      <li className="nav-item mr-2">
        <a href="#" className={ this.state.isActive === 'view-cards' ? "nav-link active" : "nav-link"}  onClick={() => this.handleClick('view-cards')}> View Cards </a>
      </li>

      <li className="nav-item mr-2 ">
        <a href="#" className={this.state.isActive === 'review-cards' ? "nav-link active" : "nav-link"} onClick={() => this.handleClick('review-cards')}> Review </a>
      </li>

      <li className="nav-item mr-2">
        <a href="#" className={this.state.isActive === 'create-card'? "nav-link active" : "nav-link"}  onClick={() => this.handleClick('create-card')}> Create Card </a>
      </li>
    </ul>
  )

  }

}

export default Nav

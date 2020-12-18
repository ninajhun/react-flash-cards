import React from "react"
import { AppContext } from "./context";

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        question: '',
        answer: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleChange(event) {
    const target = event.target.name;

    if (target === 'question') {
      this.setState({ question: event.target.value })
    } else {
      this.setState({ answer: event.target.value })
    }
  }

  handleSubmit(event){
    event.preventDefault()
    this.context.addCard(
      {
        'question': this.state.question,
        'answer': this.state.answer
      }
    );

    this.reset()
  }

  reset(){
    this.setState({
      question: '',
      answer: ''
    });
    this.props.setView('view-cards')
  }

  render() {

    return (
      <div className="container-fluid">

        <div className="row align-items-center justify-content-center ">
          <h1 className="text-center">Create New Card</h1>
        </div>

        <div className="row d-flex align-items-center justify-content-center">

          <form className="col-7" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Question:</label>
              <textarea className="form-control" name='question' value={this.state.question} onChange={this.handleChange} rows="3"></textarea>
            </div>

            <div className="form-group">
              <label>Answer:</label>
              <textarea className="form-control" name='answer' value={this.state.answer} onChange={this.handleChange} rows="3"></textarea>
            </div>

            <div className="d-flex justify-content-end">
              <button type="reset" className="btn btn-outline-danger mb-2 mr-3" onClick={this.reset}>Cancel</button>
              <button type="submit" className="btn btn-outline-primary mb-2">Save Card</button>
            </div>
          </form>

        </div>

      </div>
    )
  }
}

CreateCard.contextType = AppContext

export default CreateCard

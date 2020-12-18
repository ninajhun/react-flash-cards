import React from "react"

class CreateCard extends React.Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row align-items-center justify-content-center ">
          <h1 className="text-center">Create New Card</h1>
        </div>


        <div className="row d-flex align-items-center justify-content-center">
          <form className="col-7">

            <div className="form-group">
              <label htmlFor="">Question:</label>
              <textarea class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="">Answer:</label>
              <textarea class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="d-flex justify-content-end">
              <button type="reset" class="btn btn-outline-danger mb-2 mr-3">Cancel</button>
              <button type="submit" class="btn btn-outline-primary mb-2">Save Card</button>
            </div>


          </form>
        </div>



      </div>
    )
  }
}

export default CreateCard

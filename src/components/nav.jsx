import React from 'react'

function Nav(props){
  return(
    <ul className="nav nav-pills justify-content-end mt-4">
       <li className="nav-item mr-2">
         <a href="#" className="nav-link active" onClick = {() => props.setView("view-cards")}> View Cards </a>
       </li>

      <li className="nav-item mr-2 ">
        <a href="#" className="nav-link active" onClick = {() => props.setView("review-cards")}> Review </a>
      </li>

      <li className="nav-item mr-2">
        <a href="#" className="nav-link active" onClick = {() => props.setView("create-card")}> Create Card </a>
      </li>
     </ul>

  )
}

export default Nav

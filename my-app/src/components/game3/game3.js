import React from "react";

const Game3 = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand" href="#">Clicky Game</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav nav-fills">
       <li className="nav-item active">
        <a className="nav-link" href="#"> Instructions: Click on each image only once to win! <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Total Score: {props.score}</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Top Score: {props.topScore}</a>
      </li>
     
   
    </ul>
  
  </div>
</nav>

);

export default Game3;
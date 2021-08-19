import React from 'react';
import '../App.css';

function Summary(props) {
  return(
    <div className="summary">
      <p>This is a Summary!</p>
      <p>{props.globalState.cart}</p>
      <p>${props.globalState.total}</p>
    </div>
  );
}

export default Summary;

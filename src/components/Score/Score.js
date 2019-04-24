import React from "react";




const Score = props => (
  <div>
    <h3>Your Score 
    {props.total}</h3>
    <h3>{props.status}</h3>
  </div>
);

export default Score;
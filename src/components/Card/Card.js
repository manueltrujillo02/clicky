import React from "react";

const Card = props => (
    <div>
        <img alt={props.name} src={props.image} id={props.id} />
    
    </div>
);


export default Card;
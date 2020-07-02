import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
   
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
         <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order Summary: </h3>
      <ul>{ingredientSummary}</ul>
    </Aux>
  );
};

export default orderSummary;

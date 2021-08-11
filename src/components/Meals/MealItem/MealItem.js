import React from "react";
import classes from "./MealItem.module.css";
import MealtemForm from "./MealItemForm";

const MealItem = props => {
  const price = `$${props.price.toFixed(2)}`;
  //${} to inject dynami content
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealtemForm />
      </div>
    </li>
  );
};
export default MealItem;

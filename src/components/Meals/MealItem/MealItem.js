import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealtemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = props => {
  //to coonctin ot contect
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  //${} to inject dynami content

  const addToCartHandler = amount => {
    debugger;
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealtemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;

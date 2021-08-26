import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealtemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submithHandler = event => {
    debugger;
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; //alwys string if it number or anytype
    const enteredAmountNumber = +enteredAmount; //+ converting string number to number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    //calling other function we only have amunt  in ths component
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submithHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please Entred a valid amount (1-5)</p>}
    </form>
  );
};
export default MealtemForm;

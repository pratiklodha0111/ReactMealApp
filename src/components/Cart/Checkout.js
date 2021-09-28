import { useRef, useState } from "react";

import classes from "./Checkout.module.css";
const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;
const Checkout = (props) => {
  const [fromInputsValidate, setFromInputsValidate] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFromInputsValidate({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      //submit
      return;
    }
    //submit cart data
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };
  const namedControlledClasses = `${classes.control} ${
    fromInputsValidate.name ? "" : classes.isvaild
  }`;

  const streetControlledClasses = `${classes.control} ${
    fromInputsValidate.street ? "" : classes.isvaild
  }`;
  const postalCodeControlledClasses = `${classes.control} ${
    fromInputsValidate.postalCode ? "" : classes.isvaild
  }`;
  const cityControlledClasses = `${classes.control} ${
    fromInputsValidate.city ? "" : classes.isvaild
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={namedControlledClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!fromInputsValidate.name && <p>Please Enter a valid name</p>}
      </div>
      <div className={streetControlledClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!fromInputsValidate.street && <p>Please Enter a valid Street</p>}
      </div>
      <div className={postalCodeControlledClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!fromInputsValidate.postalCode && <p>Please Enter a valid Postal</p>}
      </div>
      <div className={cityControlledClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!fromInputsValidate.city && <p>Please Enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

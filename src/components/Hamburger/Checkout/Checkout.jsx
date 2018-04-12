import React from 'react';

const Checkout = (props) => {
  let ingredients = Object.keys(props.ingredients).map((ikey, index) => {
    return (
      <li key={index}>{ikey} : {props.ingredients[ikey].count}</li>
    );
  })

  return (
    <div className="Checkout">
      <h4>Ready to take home your items</h4>
      <p>You've ordered burger with the following ingredients :</p>

      {ingredients}

      <p>TOTAL AMOUNT TO PAY : ${props.totalPrice}</p>

        <button>CHECKOUT</button>

    </div>
  );
}

export default Checkout;

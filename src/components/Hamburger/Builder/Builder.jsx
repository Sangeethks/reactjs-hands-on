import React from 'react';
import style from './Builder.scss';

const Builder = (props) => {
  let inputs = null;
  inputs = Object.keys(props.ingredients).map((iKey) => {
    return [...Array(props.ingredients[iKey])].map((_, i) => {
       return <input type="text"
         placeholder={iKey}
         value={props.ingredients[iKey]}
         key={iKey + '-' + i}
         onChange={(event) => props.builderInputOnchangeEvent(iKey, event)}/>
    })
  })

  return (
    <div className="Builder">
      <div className="BuilderBox">
        <h4>CUSTOMISE YOUR BURGER</h4>
        <hr/>

        { inputs }

        <button className={style.BtnCheckout}>CHECKOUT</button>
      </div>
    </div>
  );
}

export default Builder;

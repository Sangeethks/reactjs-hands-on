import React from 'react';
import style from './Builder.scss';

const Builder = (props) => {
  let controls = null;

  let isLessButtonDisabled = (value) => !value;
  let isMoreButtonDisabled = (value) => value > 3;

  let controlComponents = Object.keys(props.ingredients).map((key) => {
    return {
      name: key.slice(0, 1).toUpperCase() + key.slice(1),
      type: key,
      lessDisabled: isLessButtonDisabled(props.ingredients[key]),
      moreDisabled: isMoreButtonDisabled(props.ingredients[key]),
    }
  });

  if (controlComponents) {
    controls = controlComponents.map((control, i) => {
      return (
        <div className="BuildControl" key={`${control.name}-i`}>
          <button
            onClick={() => props.buildCtrlLessEvent(control.type)}
            disabled={control.lessDisabled}>
            Less
          </button>
          <label>{control.name}</label>
          <button
            onClick={() => props.buildCtrlMoreEvent(control.type)}
            disabled={control.moreDisabled}>
            More
          </button>
        </div>
      )
    })
  }

  return (
    <div className="Builder">
      <div className="BuilderBox">
        <h4>CUSTOMISE YOUR BURGER</h4>
        <hr/>

        {controls}

        <button className={style.BtnCheckout}>CHECKOUT</button>
      </div>
    </div>
  );
}

export default Builder;

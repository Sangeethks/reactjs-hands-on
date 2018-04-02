import React from 'react';
import style from './Screen.scss';

const Screen = (props) => {
  let burger = null;
  if (props.ingredients && props.ingredients.length) {
    burger = Object.keys(props.ingredients).forEach((key) => {

    });
  }

  return (
    <div className={style.Screen}>
      {burger}
    </div>
  );
}

export default Screen;

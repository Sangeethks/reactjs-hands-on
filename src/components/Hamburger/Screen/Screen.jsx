import React from 'react';
import style from './Screen.scss';

const Screen = (props) => {
  let burger = null;
  if (props.ingredients && props.ingredients.length) {
    burger = props.ingredients.map((ingredient) => {
      return <h4>ingredient</h4>
    });
  }

  return (
    <div className={style.Screen}>
      {burger}
    </div>
  );
}

export default Screen;

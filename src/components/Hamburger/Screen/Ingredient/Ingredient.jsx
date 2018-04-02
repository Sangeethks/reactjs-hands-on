import React from 'react';
import style from './Ingredient.scss';

const Ingredient = (props) => {
  console.log(props.type);

  let ingredient = null;
  switch (props.type) {
    case ('top'):
    ingredient = <div className={style.Top}></div>
    break;
    case ('cheese'):
    ingredient = <div className={style.Cheese}></div>
    break;
    case ('slice'):
    ingredient = <div className={style.Slice}></div>
    break;
    case ('tomottow'):
    ingredient = <div className={style.Tomottow}></div>
    break;
    case ('bottom'):
    ingredient = <div className={style.Bottom}></div>
    break;
    default:
    ingredient = null;
  }

  return ingredient;
}

export default Ingredient;

import React from 'react';
import style from './Screen.scss';
import Ingredient from './Ingredient/Ingredient';

const Screen = (props) => {
  let burger = null;
  burger = Object.keys(props.ingredients).map((iKey) => {
    let arr = [...Array(props.ingredients[iKey])];
    return arr.map((_, i) => {
      return <Ingredient type={iKey} key={iKey + i}></Ingredient>
    });
  });

  console.log('[Screen -> burger]', burger);

  return (
    <div className={style.Screen}>
      <div className="BurgerScreen">
        {burger}
      </div>
    </div>
  );
}

export default Screen;

import React from 'react';
import style from './Screen.scss';
import Ingredient from './Ingredient/Ingredient';

const Screen = (props) => {
  let burger = Object.keys(props.ingredients).map((iKey) => {
    let arr = [...Array(props.ingredients[iKey])];
    return arr.map((_, i) => {
      return <Ingredient type={iKey} key={iKey + i}></Ingredient>
    });
  }).reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  if (burger.length === 0) {
    burger = (
      <p className="BrgrEmptyMsg">Please start adding ingredients</p>
    )
  }

  return (
    <div className={style.Screen}>
      <div className="BurgerScreen">
        <Ingredient type="top"></Ingredient>
        {burger}
        <Ingredient type="bottom"></Ingredient>
      </div>
    </div>
  );
}

export default Screen;

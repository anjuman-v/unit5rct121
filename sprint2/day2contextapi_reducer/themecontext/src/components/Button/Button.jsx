import React, { useContext } from 'react';
import { Appcontext } from '../ThemeContextProvider';
import style from './Button.module.css';

export const Button = ({ text }) => {
  const [theme] = useContext(Appcontext);

  return (

    <div>

      <button
        className={`${style.buttonBase} ${
          theme === 'light' ? style.buttonlight : style.buttonDark
        }`}>
        {text}
      </button>
      

    </div>
  );
};



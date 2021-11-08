import React from 'react';
import css from './Button.module.css';

const Button = ({togglePopup}) => {
  return (
    <button
      className={css.button}
      onClick={togglePopup}
    >
      Налоговый вычет
    </button>
  );
};

export default Button;
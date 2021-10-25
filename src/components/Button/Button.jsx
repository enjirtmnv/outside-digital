import React from 'react';
import css from './Button.module.css';

const Button = ({togglePopup,isPopupOpen}) => {
  return (
    <button
      className={css.button}
      onClick={togglePopup}
      disabled={ isPopupOpen && true}
    >
      Налоговый вычет
    </button>
  );
};

export default Button;
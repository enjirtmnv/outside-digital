import React from 'react';
import css from "./Radio.module.css";

const Radio = ({value, isRadio, toggleRadio, text}) => {
  return (
    <li>
      <input
        type="radio"
        id={value}
        className={css.popup__choiceRadio}
        name={'choice'}
        value={value}
        checked={isRadio === value}
        onChange={toggleRadio}
      />
      <label
        htmlFor={value}
        className={css.popup__choiceLabel}
      >
        {text}
      </label>
    </li>
  );
};

export default Radio;
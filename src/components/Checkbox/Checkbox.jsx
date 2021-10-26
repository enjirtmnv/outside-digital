import React from 'react';
import css from "./Checkbox.module.css";

const Checkbox = ({pay, index, id}) => {

  const ending = Number(String(index + 1).split('').slice(-1)[0]);

  const endingNumber = (num) => {
    const end = +num;
    if (end === 12 || end === 13 || end ===16 || end === 17 || end === 18) {
      return 'ый'
    } else if (end === 1 || end === 4 || end === 5 || end === 9 || end === 0) {
      return 'ый'
    } else if (end === 2 || end === 6 || end === 7 || end === 8){
      return 'oй'
    } else if (end === 3){
      return 'ий'
    }
  };

  return (
    <li className={css.popup__payItem}>
      <input
        type="checkbox"
        id={id}
        className={css.popup__payCheckbox}
      />
      <label
        htmlFor={id}
        className={css.popup__payLabel}
      >
        <span className={css.popup__payValue}>{pay}</span>
        {
          index === 1
          ? <span className={css.popup__payTimeName}>{` во ${index + 1}-${endingNumber(ending)} год`}</span>
            : <span className={css.popup__payTimeName}>{` в ${index + 1}-${endingNumber(ending)} год`}</span>
        }
      </label>
    </li>
  );
};

export default Checkbox;
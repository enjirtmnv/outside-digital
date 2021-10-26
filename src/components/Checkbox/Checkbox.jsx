import React, {useState} from 'react';
import css from "./Checkbox.module.css";
import {endingNumber} from "../../utils/utils";

const Checkbox = ({pay, index, id}) => {

  const [isCheck, setCheck] = useState(true);

  const toggleCheck = () => setCheck(!isCheck);

  return (
    <li className={css.popup__payItem}>
      <input
        type="checkbox"
        id={id}
        className={css.popup__payCheckbox}
        checked={isCheck}
        onChange={toggleCheck}
      />
      <label
        htmlFor={id}
        className={css.popup__payLabel}
      >
        <span className={css.popup__payValue}>{pay}</span>
        {
          index === 1
            ? <span className={css.popup__payTimeName}>{` во ${index + 1}-${endingNumber(index + 1)} год`}</span>
            : <span className={css.popup__payTimeName}>{` в ${index + 1}-${endingNumber(index + 1)} год`}</span>
        }
      </label>
    </li>
  );
};

export default Checkbox;
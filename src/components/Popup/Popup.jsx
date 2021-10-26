import React, {useState} from 'react';
import css from './Popup.module.css';
import closeIcon from '../../assets/icon/Vector.svg'
import Radio from "../Radio/Radio";
import Checkbox from "../Checkbox/Checkbox";
import {calcPayInOneYear, calcTaxInOneYear} from "../../utils/utils";


const Popup = ({isPopupOpen, setPopupOpen}) => {

  const [isRadio, setRadio] = useState('payment');
  const [salary, setSalary] = useState('');
  const [pays, setPays] = useState([]);
  const [error, setError] = useState(false);
  const [errorLength, setErrorLength] = useState(false);

  const togglePopup = () => setPopupOpen(!isPopupOpen);
  const stopPropagationContent = e => e.stopPropagation();
  const toggleRadio = (e) => setRadio(e.target.value);

  const handleSalary = (e) => {
    let num = e.target.value;
    let numWithSpace = Number(num.replace(/\D/g, '')).toLocaleString();
    setSalary(numWithSpace);
  };

  const calculatePays = () => {
    const salaryClear = salary.replace(/\D+/g, '');
    salaryClear ? setError(false) : setError(true);

    if (salaryClear && salaryClear.length < 4) {
      setErrorLength(true);
      return false
    } else {
      setErrorLength(false);
    }

    if (salaryClear && salaryClear.length > 10) {
      setErrorLength(true);
      return false
    } else {
      setErrorLength(false);
    }

    if (salaryClear) {
      const taxInOneYear = calcTaxInOneYear(salaryClear);
      setPays(calcPayInOneYear(taxInOneYear));
    } else {
      setPays([]);
    }
  };

  const wrapClasses = [css.popup__wrap];
  if (isPopupOpen) {
    wrapClasses.push(css.active);
  }

  const inputClasses = [css.popup__salary];
  if (error || errorLength) {
    inputClasses.push(css.error);
  }

  return (
    <div className={wrapClasses.join(' ')} onClick={togglePopup}>
      <div className={css.popup__content} onClick={stopPropagationContent}>
        <div className={css.popup__wrapCloseIcon}>
          <img className={css.popup__closeIcon} src={closeIcon} alt="close icon" onClick={togglePopup}/>
        </div>
        <p className={css.popup__title}>Налоговый вычет</p>
        <p className={css.popup__descr}>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового
          вычета составляет не более 13%
          от своего официального годового дохода.</p>
        <div>
          <p className={css.popup__subtitle}>Ваша зарплата в месяц</p>
          <label htmlFor="salary">
            <input
              type="text"
              className={inputClasses.join(' ')}
              name={'salary'}
              value={salary}
              onChange={handleSalary}
              placeholder={'Введите данные'}
              autoComplete="off"
            />
            {
              error
                ? <p className={css.popup__salaryError}>Поле обязательно для заполнения</p>
                : null
            }
            {
              errorLength
                ? <p className={css.popup__salaryError}>Некорректная длина ввода. Минимум 4, максимум 10. Например: 1000</p>
                : null
            }
          </label>
          <p className={css.popup__calculateButton} onClick={calculatePays}>Рассчитать</p>
        </div>
        <div className={css.popup__payWrap}>
          {
            pays.length
              ? <p className={css.popup__subtitle}>Итого можете внести в качестве досрочных:</p>
              : null
          }
          {
            pays.length
              ? <ul className={css.popup__payList}>
                {
                  pays.map((item, index) => {
                    return (
                      <Checkbox
                        pay={item}
                        index={index}
                        id={`payItem-${index}`}
                        key={`payItem-${index}`}
                      />
                    )
                  })
                }
              </ul>
              : null
          }
        </div>
        <div className={css.popup__choiceWrap}>
          <p className={css.popup__subtitle}>Что уменьшаем?</p>
          <ul className={css.popup__choiceList}>
            <Radio
              value={'payment'}
              text={'Платеж'}
              isRadio={isRadio}
              toggleRadio={toggleRadio}
            />
            <Radio
              value={'period'}
              text={'Срок'}
              isRadio={isRadio}
              toggleRadio={toggleRadio}
            />
          </ul>
        </div>
        <button className={css.popup__addButton}>Добавить</button>
      </div>
    </div>
  );
};

export default Popup;
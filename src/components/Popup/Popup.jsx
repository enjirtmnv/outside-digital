import React, { useState} from 'react';
import css from './Popup.module.css';
import closeIcon from '../../assets/icon/Vector.svg'

const Popup = ({isPopupOpen, setPopupOpen}) => {

  const [isRadioChoice, setRadioChoice] = useState('payment');
  const toggleRadio = (e) => setRadioChoice(e.target.value);

  const [salary, setSalary] = useState('');
  const handleChangeSalary = (e) => setSalary(e.target.value);

  const togglePopup = () => setPopupOpen(!isPopupOpen);
  const stopPropagationContent = e => e.stopPropagation();

  const rootClasses = [css.popup__wrap];
  if (isPopupOpen) {
    rootClasses.push(css.active);
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={togglePopup}
    >
      <div
        className={css.popup__content}
        onClick={stopPropagationContent}
      >
        <div className={css.popup__wrapCloseIcon}>
          <img
            className={css.popup__closeIcon}
            src={closeIcon} alt="close icon"
            onClick={togglePopup}
          />
        </div>
        <p className={css.popup__title}>Налоговый вычет</p>
        <p
          className={css.popup__descr}
        >Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13%
          от своего официального годового дохода.
        </p>

        <div>
          <p className={css.popup__subtitle}>Ваша зарплата в месяц</p>
          <label
            htmlFor="salary"
          >
            <input
              type="text"
              className={css.popup__salary}
              name={'salary'}
              value={salary}
              onChange={handleChangeSalary}
            />
          </label>
          <p className={css.popup__calculateButton}>Рассчитать</p>
        </div>

        <div className={css.popup__mortgageWrap}>
          <p className={css.popup__subtitle}>Итого можете внести в качестве досрочных:</p>
          <ul className={css.popup__mortgageList}>
            <li className={css.popup__mortgageItem}>
            <input
              type="checkbox"
              id={'opa-1'}
              className={css.popup__mortgageCheckbox}
            />
            <label
              htmlFor="opa-1"
              className={css.popup__mortgageLabel}
            >
                <span
                  className={css.popup__mortgageValue}
                >
                  78000
                </span>
              <span
                className={css.popup__mortgageTimeName}
              >
                  {` в 1-й год`}
                </span>
            </label>
          </li>
          </ul>
        </div>

        <div className={css.popup__choiceWrap}>
          <p className={css.popup__subtitle}>Что уменьшаем?</p>
          <ul className={css.popup__choiceList}>
            <li>
              <input
                type="radio"
                id={'payment'}
                className={css.popup__choiceRadio}
                name={'choice'}
                value={'payment'}
                checked={isRadioChoice === 'payment'}
                onChange={toggleRadio}
              />
              <label
                htmlFor="payment"
                className={css.popup__choiceLabel}
              >
                Платеж
              </label>

            </li>
            <li>
              <input
                type="radio"
                id={'period'}
                className={css.popup__choiceRadio}
                name={'choice'}
                value={'period'}
                checked={isRadioChoice === 'period'}
                onChange={toggleRadio}
              />
              <label
                htmlFor="period"
                className={css.popup__choiceLabel}
              >
                Срок
              </label>
            </li>
          </ul>
        </div>

        <button className={css.popup__addButton}>Добавить</button>
      </div>
    </div>
  );
};

export default Popup;
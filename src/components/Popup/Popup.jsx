import React, {useState} from 'react';
import css from './Popup.module.css';
import closeIcon from '../../assets/icon/Vector.svg'
import Radio from "../Radio/Radio";
import Checkbox from "../Checkbox/Checkbox";


const Popup = ({isPopupOpen, setPopupOpen}) => {

  const [isRadioChoice, setRadioChoice] = useState('payment');
  const [salary, setSalary] = useState('');
  const [pays, setPays] = useState([]);

  const toggleRadio = (e) => setRadioChoice(e.target.value);

  const handleChangeSalary = (e) => {
    let num = e.target.value;
    let numWithSpace = Number(num.replace(/\s+/g, '')).toLocaleString();
    setSalary(numWithSpace);
  };

  const calculatePays = () => {
    const salaryRemoveSpace = salary.replace(/\s+/g, '');
    if (salaryRemoveSpace) {
      const payArray = [];
      let tax = 260000;
      const taxInOneYear = Math.floor(salaryRemoveSpace * 12 * 0.13);
      const years = Math.floor(260000 / taxInOneYear);
      for (let i = 0; i < years; i++) {
        if (tax - taxInOneYear > 0) {
          tax = tax - taxInOneYear;
          payArray.push(`${taxInOneYear.toLocaleString()} рублей`);
        } else {
          payArray.push(`${tax.toLocaleString()} рублей`)
        }
      }
      setPays(payArray);
    } else {
      setPays([]);
    }
  };

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
              placeholder={'Введите данные'}
              autoComplete="off"
              pattern="[0-9]*"
            />
            <p className={css.popup__salaryError}>Поле обязательно для заполнения</p>
          </label>
          <p
            className={css.popup__calculateButton}
            onClick={calculatePays}
          >Рассчитать</p>
        </div>

        <div className={css.popup__payWrap}>
          <p className={css.popup__subtitle}>Итого можете внести в качестве досрочных:</p>
          <ul className={css.popup__payList}>
            {
              pays.map((item, index) => {
                return (
                  <Checkbox
                    pay={item}
                    index={index}
                    id={`payItem-${index}`}
                  />
                )
              })
            }
          </ul>
        </div>

        <div className={css.popup__choiceWrap}>
          <p className={css.popup__subtitle}>Что уменьшаем?</p>
          <ul className={css.popup__choiceList}>
            <Radio
              value={'payment'}
              text={'Платеж'}
              isRadioChoice={isRadioChoice}
              toggleRadio={toggleRadio}
            />
            <Radio
              value={'period'}
              text={'Срок'}
              isRadioChoice={isRadioChoice}
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
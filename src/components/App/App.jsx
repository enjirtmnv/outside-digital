import React, { useState} from 'react';
import './App.module.css';
import css from './App.module.css';
import Popup from "../Popup/Popup.jsx";
import Button from "../Button/Button.jsx";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => setPopupOpen(!isPopupOpen);

  return (
    <div className={css.app__wrap}>
      <Button
        togglePopup={togglePopup}
        isPopupOpen={isPopupOpen}
      />
      {
        isPopupOpen
          ?
          <Popup
            isPopupOpen={isPopupOpen}
            setPopupOpen={setPopupOpen}
          />
          : null
      }
    </div>
  );
}

export default App;

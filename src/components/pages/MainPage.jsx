import React from 'react';
import css from './MainPage.module.css';
import main from '../../css/main.css';
import Today from '../today/Today';
import Month from '../month/Month';
const MainPage = () => {
  return (
    <div className={css.mainPageContainer}>
      <div style={{ width: '738px' }} className={css.mainPageHero}>
        <div className={css.heroImg} />
        <button>Add Water</button>
      </div>
      <div className={css.mainPageCalendar}>
        <div
          style={{
            // width: '544px',
            height: '260px',
            outline: '1px solid red',
          }}
        >
          <Today />
        </div>

        <Month />
      </div>
    </div>
  );
};

export default MainPage;

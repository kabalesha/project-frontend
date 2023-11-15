import React from 'react';
import css from './HomePage.module.css';
import classNames from 'classnames';
import '../../../css/main.css';
import Today from '../../today/Today';
import Month from '../../month/Month';
const MainPage = () => {
  return (
    <div className={css.mainPageContainer}>
      <div className={css.heroImg} />

      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <h2>Today</h2>
        <progress id="file" value="46" max="100" />
        <button>Add Water</button>
      </div>

      <div className={css.mainPageCalendar}>
        <Today />

        <Month />
      </div>
    </div>
  );
};

export default MainPage;

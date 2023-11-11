import React from 'react';
import css from './MainPage.module.css';
import Today from '../today/Today';
import Month from '../month/Month';
const MainPage = () => {
  return (
    <div className={css.mainPageContainer}>
      <div className={css.heroImg} />
      <button>Add Water</button>
      <div>
        <Today />
      </div>
      <div>
        <Month />
      </div>
    </div>
  );
};

export default MainPage;

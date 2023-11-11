import React from 'react';
import css from './MainPage.module.css';
import main from '../../css/main.css';
import Today from '../today/Today';
import Month from '../month/Month';
const MainPage = () => {
  return (
    <div className={css.mainPageContainer}>
      <div style={{ width: '738px' }}>
        <div className={css.heroImg} />
        <button>Add Water</button>
      </div>
      <div
        style={{
          width: '544px',
          height: '680px',
          padding: '24px',
          outline: '1px solid red',
          backgroundColor: 'rgba(64, 123, 255, 0.3)',
        }}
      >
        <div
          style={{
            width: '544px',
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

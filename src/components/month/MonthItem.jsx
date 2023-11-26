import React, { useState } from 'react';
import css from './MontsItem.module.css';
import { useSelector } from 'react-redux';
import { getNormaSelector } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
const DayItem = ({ day, handleClick, selectedDay, row }) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const normaDaile = useSelector(getNormaSelector);

  return (
    <div className={css.calendarWrapper} key={day}>
      <button
        onClick={() => {
          handleClick(day);
          setShowAdditionalInfo(true);
        }}
        className={`${css.calendarItem} ${
          selectedDay === day ? css.selected : ''
        }`}
      >
        {day}
      </button>
      {selectedDay === day && showAdditionalInfo && (
        <div className={`${css.additionalInfo} ${css['row-' + row]}`}>
          <div className={css.wrapper}>
            <p className={css.infoDate}>5, April</p>
            <p>
              Daily norma: <span className={css.accent}>1.5 L</span>
            </p>
            <p>
              Fulfillment of the daily norm:{' '}
              <span className={css.accent}>100%</span>
            </p>
            <p>
              How many servings of water: <span className={css.accent}>6</span>
            </p>
            <button
              className={css.infoClose}
              onClick={() => setShowAdditionalInfo(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 12L12 4M4 4L12 12"
                  stroke="#407BFF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const MonthItem = ({ quantityDays, handleClick, selectedDay }) => {
  const arr = Object.values(quantityDays);
  const [day] = arr;
  const i = [];
  let n = 0;
  while (n < day) {
    n++;
    i.push(n);
  }
  const isDesk = useMediaQuery({ query: '(min-width: 1440px)' });
  const isMob = useMediaQuery({ query: '(max-width: 767.98px)' });
  const itemsInRow = isMob ? 5 : isDesk ? 9 : 11;
  return i.map((el, idx) => (
    <DayItem
      row={Math.ceil((idx + 1) / itemsInRow)}
      key={el}
      day={el}
      handleClick={handleClick}
      selectedDay={selectedDay}
    />
  ));
};

export default MonthItem;

import React from 'react';
import css from './MontsItem.module.css';
const MonthItem = ({ quantityDays, value }) => {
  const arr = Object.values(quantityDays);
  const [day] = arr;
  const i = [];
  let n = 0;
  while (n < day) {
    n++;
    i.push(n);
  }
  const handleClick = el => {
    alert(el);
  };
  return i.map((el, idx) => (
    <div style={{ display: 'block' }} key={el}>
      <div
        onClick={() => handleClick(idx)}
        key={el}
        className={css.calendarItem}
      >
        {el}
      </div>
      <span style={{ fontSize: '12px' }}>{value} %</span>
    </div>
  ));
};

export default MonthItem;

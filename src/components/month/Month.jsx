import React from 'react';
import MonthItem from './MonthItem';
import css from '../pages/HomePage.module.css';
const Month = () => {
  const date = new Date().getFullYear();

  const year = [
    { January: '31' },
    { February: date % 4 === 0 ? 29 : 28 },
    { March: '31' },
    { April: '30' },
    { May: '31' },
    { June: '30' },
    { July: '31' },
    { August: '31' },
    { September: '30' },
    { October: '31' },
    { November: '30' },
    { December: '31' },
  ];
  const currentMonth = new Date().getMonth();
  const quantityDays = year[currentMonth];
  const arr = Object.keys(year[currentMonth]);
  const [month] = arr;

  const value = 100;
  return (
    <div style={{ display: 'grid' }} className={css.calendarDiv}>
      <h2>Monts</h2>
      <p> {month}</p>
      <div
        style={{
          outline: '1px solid red',
          display: 'grid',

          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: '22px',
          width: '544px',
          height: '332px',
        }}
      >
        <MonthItem quantityDays={quantityDays} value={value} />
      </div>
    </div>
  );
};

export default Month;

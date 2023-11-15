import React from 'react';
import MonthItem from './MonthItem';
import css from './MontsItem.module.css';
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
    <div className={css.currentMonth}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <h2>Monts</h2>
        <p> {month}</p>
      </div>

      <div className={css.calendar}>
        <MonthItem quantityDays={quantityDays} value={value} />
      </div>
    </div>
  );
};

export default Month;

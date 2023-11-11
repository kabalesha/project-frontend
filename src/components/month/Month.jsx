import React from 'react';
import MonthItem from './MonthItem';

const Month = () => {
  const date = new Date().getFullYear();

  const year = [
    '31',
    date % 4 === 0 ? 29 : 28,
    '31',
    '30',
    '31',
    '30',
    '31',
    '31',
    '30',
    '31',
    '30',
    '31',
  ];

  const currentMonth = new Date().getMonth();
  const quantityDays = year[currentMonth];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)' }}>
      <MonthItem quantityDays={quantityDays} />
    </div>
  );
};

export default Month;

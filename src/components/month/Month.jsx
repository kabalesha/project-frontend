import React from 'react';
import MonthItem from './MonthItem';

const Month = () => {
  const month = [
    {
      January: '31',
      February: [28, 29],
      March: '31',
      April: '31',
      May: '31',
      June: '31',
      July: '31',
      August: '31',
      September: '31',
      October: '31',
      November: '31',
      December: '31',
    },
  ];
  return (
    <div>
      <MonthItem month={month} />
    </div>
  );
};

export default Month;

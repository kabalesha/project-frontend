import React from 'react';

const MonthItem = ({ month }) => {
  month.map(el => console.log('el', el));
  return <div>MonthItem</div>;
};

export default MonthItem;

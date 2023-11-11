import React from 'react';

const MonthItem = ({ quantityDays }) => {
  const i = [];
  let n = 0;
  while (n < 30) {
    n++;
    i.push(n);
  }
  console.log('i', i);
  return i.map(el => (
    <div key={el} style={{ border: '1px solid red', radius: '30px' }}>
      {el}
    </div>
  ));
};

export default MonthItem;

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
    <div
      key={el}
      style={{
        border: '1px solid red',
        borderRadius: '20px',
        width: '34px',
        height: '34px',
        alignItems: 'center',

        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      {el}
    </div>
  ));
};

export default MonthItem;

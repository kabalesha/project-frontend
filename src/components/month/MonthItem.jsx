import React from 'react';

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
        style={{
          display: 'inherit',
          backgroundColor: 'blue',
          borderRadius: '20px',
          width: '34px',
          height: '34px',
          alignItems: 'center',
          marginBottom: '8px',
        }}
      >
        {el}
      </div>
      <span style={{ fontSize: '12px' }}>{value} %</span>
    </div>
  ));
};

export default MonthItem;

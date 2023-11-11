import React from 'react';

const MonthItem = ({ quantityDays, value }) => {
  const handleClick = el => {
    console.log('i', el);
    alert(el);
  };
  return i.map((el, idx) => (
    <div style={{ display: 'block' }}>
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

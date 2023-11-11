import React from 'react';

const Today = () => {
  const a = [
    { id: 1, portion: 250, time: '7:00' },
    { id: 2, portion: 200, time: '9:00' },
    { id: 3, portion: 250, time: '11:00' },
  ];

  return a.map(el => {
    return (
      <div key={el.id}>
        <div>{el.portion}</div>:<div>{el.time}</div>
      </div>
    );
  });
};

export default Today;

import React from 'react';
import TodayItem from './TodayItem';
const Today = () => {
  return (
    <div>
      <TodayItem />
      <button style={{ border: 'none' }}>+add water</button>
    </div>
  );
};

export default Today;

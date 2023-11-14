import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { activIdxSelector } from 'redux/selectors';
const TodayForm = ({ addPortion }) => {
  //   const activIdx = useSelector(activIdxSelector);
  const [time, setTime] = useState('');
  const [portion, setPortion] = useState('');

  const handleSbmit = e => {
    e.preventDefault();
    addPortion({ time, portion });
    setTime('');
    setPortion('');
  };
  const handleChange = e => {
    e.target.name === 'time'
      ? setTime(e.target.value)
      : setPortion(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSbmit}>
        <input onChange={handleChange} name="time" value={time} />
        <input onChange={handleChange} name="portion" value={portion} />
        <button type="submit">Submit</button>
        <button>Remove</button>
        <button>Del</button>
        {/* <button>{activIdx !== null ? 'Update Task' : 'Add Task'}</button> */}
      </form>
    </>
  );
};

export default TodayForm;

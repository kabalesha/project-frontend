import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { activIdxSelector } from 'redux/selectors';
import css from './TodayForm.module.css';
const TodayForm = ({ addPortion, idx }) => {
  console.log('form', idx);
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
    <div className={css.addWaterDiv}>
      <h3>Add Water</h3>
      <h5>Choose a value : </h5>
      <h4> Amount of water</h4>
      <button>--</button>
      <h3> 50 ml </h3>
      <button>++</button>
      <form onSubmit={handleSbmit}>
        <label>
          Recording time :
          <input type="time" onChange={handleChange} name="time" value={time} />
        </label>
        <label>
          Enter the value of the water used :
          <input onChange={handleChange} name="portion" value={portion} />
        </label>
        <h3> 50 ml </h3>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TodayForm;

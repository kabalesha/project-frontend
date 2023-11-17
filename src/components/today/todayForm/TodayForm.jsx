import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { activIdxSelector } from 'redux/selectors';
import css from './TodayForm.module.css';
const TodayForm = ({ addPortion, data }) => {
  console.log('data', data);

  const [time, setTime] = useState('');
  const [counter, setCounter] = useState(50);
  useEffect(() => {
    setTime('' ?? data.time);
  }, [data.time]);

  const handleSbmit = e => {
    e.preventDefault();
    console.log('time', time);

    addPortion({ time, counter });
    setTime('');
    setCounter(50);
  };
  const handleChange = e => {
    e.target.name === 'time'
      ? setTime(e.target.value)
      : setCounter(e.target.value);
  };

  return (
    <div className={css.addWaterDiv}>
      <h3>Add Water</h3>
      <h5>Choose a value : </h5>
      <h4> Amount of water</h4>
      {counter >= 50 && (
        <button onClick={() => setCounter(counter - 50)}>--</button>
      )}
      <h3> {counter} ml </h3>
      <button onClick={() => setCounter(counter + 50)}>++</button>
      <form onSubmit={handleSbmit}>
        <label>
          Recording time :
          <input type="time" onChange={handleChange} name="time" value={time} />
        </label>
        <label>
          Enter the value of the water used :
          <input onChange={handleChange} name="counter" value={counter} />
        </label>
        <h3> {counter} </h3>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TodayForm;

import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { activIdxSelector } from 'redux/selectors';
import css from './TodayForm.module.css';
import Icons from '../../../icons/icons.svg';
import { useDispatch } from 'react-redux';
import { modalShow } from '../../../redux/showModal/sliceShowModal';

const TodayForm = ({ addPortion }) => {
  //   const activIdx = useSelector(activIdxSelector);
  const [time, setTime] = useState('');
  const [portion, setPortion] = useState('');
  const [counter, setCounter] = useState(50);
  const dispath = useDispatch();
  const handleSbmit = e => {
    e.preventDefault();

    setPortion(counter);
    addPortion({ time, portion: counter });
    setTime('');
    setPortion('');
  };
  const handleChange = e => {
    e.target.name === 'time'
      ? setTime(e.target.value)
      : setPortion(e.target.value);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.addWaterDiv}>
        <div className={css.addWaterCloseDiv}>
          <h3 className={css.addWaterTitle}>Add water</h3>
          <button
            type="button"
            className={css.addWaterBtnClose}
            onClick={() => dispath(modalShow(false))}
          >
            <svg width="24" height="24">
              <use href={Icons + '#x-close'}></use>
            </svg>
          </button>
        </div>
        <div>
          <h5 className={css.addWaterFormTitle}>Choose a value : </h5>
          <h4 className={css.addWaterAmount}> Amount of water</h4>
          <div className={css.addWaterCounters}>
            <button
              className={css.addWaterBtn}
              onClick={() => setCounter(counter - 50)}
            >
              <svg width="24" height="24">
                <use href={Icons + '#minus'}></use>
              </svg>
            </button>

            <h3 className={css.addWaterCounter}> {counter} ml </h3>
            <button
              className={css.addWaterBtn}
              onClick={() => setCounter(counter + 50)}
            >
              <svg width="24" height="24" className={css.addWaterSvgPlus}>
                <use href={Icons + '#x-close'}></use>
              </svg>
            </button>
          </div>
        </div>
        <form onSubmit={handleSbmit}>
          <label className={css.addWaterLabel1}>
            Recording time :
            <input
              type="time"
              onChange={handleChange}
              name="time"
              value={time}
              className={css.addWaterInput}
            />
          </label>
          <label className={css.addWaterLabel2}>
            Enter the value of the water used :
            <input
              onChange={handleChange}
              name="portion"
              value={portion || counter}
              className={css.addWaterInput}
            />
          </label>
          <div className={css.addWaterBlockSave}>
            <h3 className={css.addWaterCounterSave}> {counter}ml </h3>
            <button type="submit" className={css.addWaterBtnSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodayForm;

import React, { useEffect, useState } from 'react';

import css from './EditForm.module.css';
import Icons from '../../../icons/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { modalShow } from '../../../redux/showModal/sliceShowModal';
import EditItem from './EditItem';
import { selectEditingItem } from '../../../redux/selectors';
import { thunkPortionRemoveWater } from '../../../redux/portionOfDrinking/thunkPortionOfDrinking';
import { timeUpdate } from '../../utils/time';

const EditForm = ({ addPortion }) => {
  const editingPortion = useSelector(selectEditingItem);
  const [time, setTime] = useState(editingPortion.date);
  const [counter, setCounter] = useState(editingPortion.amount);
  const dispath = useDispatch();

  const handleSbmit = e => {
    const a = timeUpdate(time);
    console.log('a', a);
    e.preventDefault();
    console.log('time', time);
    dispath(
      thunkPortionRemoveWater({
        id: editingPortion._id,
        body: {
          date: time,
          amount: counter,
        },
      })
    );
  };
  const handleChange = e => {
    const { name, value } = e.target;
    name === 'time' && setTime(value);
    name === 'counter' && setCounter(value);
  };
  useEffect(() => {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedTime = `${hour}:${minutes}`;
    setTime(formattedTime);
  }, []);
  return (
    <div className={css.backdrop}>
      <div className={css.addWaterDiv}>
        <div className={css.addWaterCloseDiv}>
          <h3 className={css.addWaterTitle}>
            Edit the entered amount of water
          </h3>

          <button
            type="button"
            className={css.addWaterBtnClose}
            onClick={() => dispath(modalShow(false))}
            style={{
              border: 'none',
              backgroundColor: 'inherit',
              position: 'absolute',
              top: '0',
              right: '0',
            }}
          >
            <svg width="24" height="24">
              <use href={Icons + '#x-close'}></use>
            </svg>
          </button>
        </div>

        <EditItem amount={editingPortion.amount} time={editingPortion.date} />
        <div>
          <h5 className={css.addWaterFormTitle}>Correct entered data: </h5>

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
          <label className={css.addWaterLabel}>
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
              name="counter"
              value={counter}
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

export default EditForm;

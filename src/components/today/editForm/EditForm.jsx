import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { activIdxSelector } from 'redux/selectors';
import css from './EditForm.module.css';
import Icons from '../../../icons/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { modalShow } from '../../../redux/showModal/sliceShowModal';
import EditItem from './EditItem';
import { selectEditingItem } from '../../../redux/selectors';

const EditForm = ({ addPortion }) => {
  //   const activIdx = useSelector(activIdxSelector);
  const editingPortion = useSelector(selectEditingItem);
  const [time, setTime] = useState(editingPortion.date);
  // const [portion, setPortion] = useState(editingPortion.);
  const [counter, setCounter] = useState(editingPortion.amount);
  const dispath = useDispatch();

  const handleSbmit = e => {
    e.preventDefault();

    addPortion({ time, portion: counter });
  };
  const handleChange = e => {
    // e.target.name === 'time'
    //   ? setTime('5:15' && e.target.value)
    // : setPortion(300 && e.target.value);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.addWaterDiv}>
        <div className={css.addWaterCloseDiv}>
          <h3 className={css.addWaterTitle}>
            Edit the entered amount of water
          </h3>

          <EditItem amount={editingPortion.amount} time={editingPortion.date} />

          <p className={css.addWaterSubtitle}>Correct entered data:</p>

          <button
            type="button"
            className={css.editFormWaterBtnClose}
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
        <form onSubmit={handleSbmit}>
          <input
            onChange={handleChange}
            name="counter"
            value={counter}
            className={css.addWaterInput}
          />
        </form>
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

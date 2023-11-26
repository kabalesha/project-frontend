import React from 'react';
import css from './modalDaily.module.css';
import { useState } from 'react';
import { imb } from './../../utils/water.js';

const ModalDaily = ({ onClose }) => {
  const [result, setResult] = useState(null);
  const [values, setValues] = useState({
    gender: 'girl',
    weight: 0,
    time: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [rate, setRate] = useState('');
  const handleIMB = value => {
    const result = (imb(1.8, 90) * 100).toFixed(1);
    setResult(result);
    return result;
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('request daily rate', rate);
    // Dispatch (addWaterThunk)
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleRate = e => {
    setRate(e.target.value);
  };
  const handleBlur = () => {
    calculate(values.gender, values.weight, values.time);
  };

  const handleClose = () => {
    setIsModalOpen(false);

    onClose();
  };

  const calculate = (gender, weight = 0, time = 0) => {
    let calculatedResult = 0;
    switch (gender) {
      case 'girl':
        if (weight >= 0 && time >= 0) {
          calculatedResult = weight * 0.03 + time * 0.4;
        }
        break;
      case 'man':
        if (weight >= 0 && time >= 0) {
          calculatedResult = weight * 0.04 + time * 0.6;
        }
        break;
      default:
        break;
    }
    setResult(calculatedResult.toFixed(1));
  };

  return (
    isModalOpen && (
      <div className={css.backdrop}>
        <div className={css.modal}>
          <p className={css.title}>My daily norma</p>

          <button type="button" className={css.closeBtn} onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#407BFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <ul className={css.genderFormula}>
            <li>
              <p className={css.gender}>
                For girl:
                <span className={css.formula}>V=(M*0.03)+(T*0.4)</span>
              </p>
            </li>
            <li>
              <p className={css.gender}>
                For man:
                <span className={css.formula}>V=(M*0.04)+(T*0.6)</span>
              </p>
            </li>
          </ul>

          <p className={css.explanation}>
            <span className={css.star}> *</span>V is the volume of the water
            norm in liters per day, M is your body weight, T is the time of
            active sports, or another type of activity commensurate in terms of
            loads (in the absence of these, you must set 0)
          </p>

          <p className={css.titleLabel}>Calculate your rate:</p>
          <div className={css.radioBtn}>
            <div className={css.genderBtn}>
              <input
                type="radio"
                className={css.gender_input}
                value="girl"
                name="gender"
              />
              <label htmlFor="Woman" className={`${css.gender_label} `}>
                For girl
              </label>
            </div>
            <div className={css.genderBtn}>
              <input
                type="radio"
                className={css.gender_input}
                value="man"
                name="gender"
              />
              <label htmlFor="Man" className={`${css.gender_label} `}>
                For man
              </label>
            </div>
          </div>

          <form className={css.inputs} onSubmit={handleSubmit}>
            <div className={css.labels}>
              <label className={css.dataLabel}>Your weight in kilograms:</label>
              <input
                className={`${css.modal_input} ${css.modal_input_data}`}
                onBlur={handleBlur}
                type="number"
                name="weight"
                value={values.weight}
                onChange={handleInputChange}
              />
            </div>
            <div className={css.labels}>
              <label className={css.dataLabel}>
                The time of active participation in sports or other activities
                with a high physical. load:
              </label>
              <input
                onBlur={handleBlur}
                type="number"
                name="time"
                value={values.time}
                onChange={handleInputChange}
                className={`${css.modal_input} ${css.modal_input_data}`}
              />
            </div>
            <div className={css.count}>
              <p className={css.amount}>
                The required amount of water in liters per day:
              </p>
              <p className={css.littres}>{result}L</p>
            </div>

            <div className={css.labels}>
              <label className={css.lastInput}>
                The required amount of water in liters per day:
              </label>
              <input
                type="number"
                id="water"
                name="rate"
                // onChange={handleInputChange}
                onChange={handleRate}
                onBlur={handleBlur}
                // value={handleIMB}
                value={rate}
                className={`${css.modal_input} ${css.modal_input_data}`}
              />
            </div>
            <button
              type="submit"
              className={css.saveBtn}
              //   onSubmit={handleSubmit}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default ModalDaily;

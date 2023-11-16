import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Main.module.css';
import calendar from './calendar.png';
import chartbar from './chartbar.png';
import wrench from './wrench.png';

const WaterConsumptionTracker = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');
  };

  return (
    <div className={css.bg_img}>
      <div className={css.wrap_benefits}>
        <div className={css.head_benefits}>
          <h1 className={css.title_benefits}>Water consumption tracker</h1>
          <h2 className={css.subtitle_benefits}>
            Record daily water intake and track
          </h2>
        </div>
        <div>
          <p className={css.list_title}>Tracker Benefits</p>
          <ul className={css.list_benefits}>
            <li className={css.item_benefits}>
              <img
                className={css.icon_benefits}
                src={calendar}
                alt="Calendar"
              />
              <p>Habit drive</p>
            </li>
            <li className={css.item_benefits}>
              <img
                className={css.icon_benefits}
                src={chartbar}
                alt="Chartbar"
              />
              <p>View statistics</p>
            </li>
            <li className={css.item_benefits}>
              <img className={css.icon_benefits} src={wrench} alt="Wrench" />
              <p>Personal rate setting</p>
            </li>
          </ul>
        </div>
        <button type="button" onClick={handleButtonClick} className={css.btn}>
          Try tracker
        </button>
      </div>
    </div>
  );
};

export default WaterConsumptionTracker;

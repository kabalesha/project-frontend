import React from 'react';
import css from "./Main.module.css";

const WaterConsumptionTracker = () => {
    return (
    <div className={css.wrap}>
        <h1 className={css.title}>Water consumption tracker</h1>
        <h2 className={css.subtitle}>Record daily water intake and track</h2>
        <p className={css.list_title}>Tracker Benefits</p>
        <ul className={css.list}>
            <li className={css.item}>Habit drive</li>
            <li className={css.item}>View statistics</li>
            <li className={css.item}>Personal rate setting</li>
            </ul>
            <button type='button' className={css.btn}>Try tracker</button>
    </div>
  );
};

export default WaterConsumptionTracker;
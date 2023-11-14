import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from "./Main.module.css";

const WaterConsumptionTracker = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/SignUpPage');
    };

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
            <button type='button' className={css.btn} onClick={handleButtonClick}>
                Try tracker
            </button>
        </div>
    );
};

export default WaterConsumptionTracker;

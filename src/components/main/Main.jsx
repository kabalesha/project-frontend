import React from 'react';
import css from "./Main.module.css";
import WaterConsumptionTracker from './WaterConsumptionTracker.jsx';
import WhyDrinkWater from './WhyDrinkWater.jsx';

const Main = () => {
    return (
        <div className={css.wrapper}>
            <WaterConsumptionTracker />
            <WhyDrinkWater />
        </div>
  );
};

export default Main;
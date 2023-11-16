import React from 'react';
import css from "./Main.module.css";
import WaterConsumptionTracker from './WaterConsumptionTracker.jsx';
import WhyDrinkWater from './WhyDrinkWater.jsx';

const Main = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <div className={css.wrapper_content}>
                    <WaterConsumptionTracker />
                    <WhyDrinkWater />
                </div>
            </div>
        </div>
  );
};

export default Main;
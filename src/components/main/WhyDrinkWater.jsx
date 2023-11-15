import React from 'react';
import css from "./Main.module.css";

const WhyDrinkWater = () => {
    return (
    <div className={css.wrap_reasons}>
        <p className={css.list_title}>Why drink water</p>
        <ul className={css.list}>
                <li className={css.item}>
                    {/* <svg class="icon" width="8px" height="8px">
                        <use href="#icon-ellipse"></use>
                    </svg> */}
                    Supply of nutrients to all organs
                </li>
                <li className={css.item}>Providing oxygen to the lungs</li>
                <li className={css.item}>Maintaining the work of the heart</li>
                <li className={css.item}>Release of processed substances</li>
                <li className={css.item}>Ensuring the stability of the internal environment</li>
                <li className={css.item}>Maintaining within the normal temperature</li>
                <li className={css.item}>Maintaining an immune system capable of resisting disease</li>
        </ul>
    </div>
  );
};

export default WhyDrinkWater;
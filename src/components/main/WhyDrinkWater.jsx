import React from 'react';
import css from "./Main.module.css";
import ellipse from "./ellipse.png";

const WhyDrinkWater = () => {
    return (
    <div className={css.wrap_reasons}>
        <p className={css.list_title}>Why drink water</p>
        <ul className={css.list_reasons}>
            <li className={css.item_reasons}>
                <img className={css.icon_reasons} src={ellipse} alt="Ellipse"/>
                <p>Supply of nutrients to all organs</p>
            </li>
            <li className={css.item_reasons}>
                <img className={css.icon_reasons} src={ellipse} alt="Ellipse" />
                <p>Providing oxygen to the lungs</p>
            </li>
            <li className={css.item_reasons}>
                <img className={css.icon_reasons} src={ellipse} alt="Ellipse" />
                <p>Maintaining the work of the heart</p>
            </li>
            <li className={css.item_reasons}>
                <img className={css.icon_reasons} src={ellipse} alt="Ellipse" />
                <p>Release of processed substances</p>
            </li>
            <li className={css.item_reasons}>
                <img className={css.icon_reasons} src={ellipse} alt="Ellipse" />
                <p>Ensuring the stability of the internal environment</p>
            </li>
            <li className={css.item_reasons}>
                <img className={css.icon_reasons} src={ellipse} alt="Ellipse" />
                <p>Maintaining within the normal temperature</p>
            </li>
            <li className={css.item_reasons}>
                <img className={css.icon_reasons} src={ellipse} alt="Ellipse" />
                <p>Maintaining an immune system capable of resisting disease</p>
            </li>
        </ul>
    </div>
  );
};

export default WhyDrinkWater;
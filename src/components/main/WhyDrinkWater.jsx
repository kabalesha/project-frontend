import React from 'react';
import css from './Main.module.css';
import ellipse from './ellipse.png';

const WhyDrinkWater = () => {
  return (
    <div className={css.wrap_reasons}>
      <p className={css.list_title}>Why drink water</p>
      <ul className={css.list_reasons}>
        <li className={css.item_reasons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#407BFF" />
          </svg>
          <p>Supply of nutrients to all organs</p>
        </li>
        <li className={css.item_reasons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#407BFF" />
          </svg>
          <p>Providing oxygen to the lungs</p>
        </li>
        <li className={css.item_reasons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#407BFF" />
          </svg>
          <p>Maintaining the work of the heart</p>
        </li>
        <li className={css.item_reasons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#407BFF" />
          </svg>
          <p>Release of processed substances</p>
        </li>
        <li className={css.item_reasons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#407BFF" />
          </svg>
          <p>Ensuring the stability of the internal environment</p>
        </li>
        <li className={css.item_reasons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#407BFF" />
          </svg>
          <p>Maintaining within the normal temperature</p>
        </li>
        <li className={css.item_reasons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#407BFF" />
          </svg>
          <p>Maintaining an immune system capable of resisting disease</p>
        </li>
      </ul>
    </div>
  );
};

export default WhyDrinkWater;

// TodayList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPortion, quantityDrinkSelector } from '../../redux/selectors';
import {
  del,
  remove,
} from '../../redux/portionOfDrinking/slicePortionOfDrinking';
import { modalShow } from '../../redux/showModal/sliceShowModal';
import css from './todayForm/TodayList.module.css';
import { Cup } from './Cup.jsx';
import { Edit } from './todayForm/Edit.jsx';
import { DeleteIcon } from './todayForm/DeleteIcon.jsx';
import { modalName } from '../../redux/changeModal/changeModal';
import { json } from 'react-router-dom';
import { thunkPortionDeleteWater } from '../../redux/portionOfDrinking/thunkPortionOfDrinking';

const TodayList = () => {
  const drinkingList = useSelector(quantityDrinkSelector);

  useEffect(() => {
    const listContainer = document.querySelector('.listContainer');
    if (listContainer) {
      const windowHeight = window.innerHeight;
      listContainer.style.height = `${windowHeight * 0.33}px`;
    }
  }, []);

  const handleRemove = idx => {
    drinkingList &&
      drinkingList.map((el, i) => {
        if (i !== idx) {
          return el;
        } else {
          return el;
        }
      });
  };

  const dispath = useDispatch();
  const handleDelItem = idx => {
    // dispath(modalShow(true));
    console.log('drinkingList', drinkingList);
    const data = drinkingList.find((el, i) => i === idx);
    console.log('data', data.data._id);
    dispath(thunkPortionDeleteWater(data.data._id));
  };

  return (
    <div className={css.listContainer}>
      {drinkingList && drinkingList.length > 0 ? (
        <div className={css.list}>
          {drinkingList.map((el, idx) => (
            <div className={css.itemWrap} key={idx}>
              <div className={css.portionInfo}>
                <Cup className={css.icon} />
                <div className={css.portion}>{el.portion + ' ml'}</div>
                <div className={css.time}>{el.time}</div>
              </div>
              <div className={css.btnsWrap}>
                <Edit
                  className={css.editBtn}
                  onClick={() => handleRemove(idx)}
                  // handle={modal}
                />
                <DeleteIcon
                  className={css.delBtn}
                  onClick={() => handleDelItem(idx)}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No entries for the current day</div>
      )}
    </div>
  );
};

export default TodayList;

// TodayList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPortion, quantityDrinkSelector } from '../../redux/selectors';
import {
  del,
  editPortion,
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

  const handleRemove = id => {
    const { amount, date, _id } = drinkingList.find(el => el._id === id);

    dispath(editPortion({ amount, date, _id }));
    dispath(modalName('edit'));
    dispath(modalShow(true));
  };

  const dispath = useDispatch();
  const handleDelItem = id => {
    dispath(thunkPortionDeleteWater(id));
  };

  return (
    <div className={css.listContainer}>
      {drinkingList && drinkingList.length > 0 ? (
        <div className={css.list}>
          {drinkingList.map((el, idx) => (
            <div className={css.itemWrap} key={idx}>
              <div className={css.portionInfo}>
                <Cup className={css.icon} />
                <div className={css.portion}>{el.amount + ' ml'}</div>
                <div className={css.time}>{el.date}</div>
              </div>
              <div className={css.btnsWrap}>
                <Edit
                  className={css.editBtn}
                  onClick={() => handleRemove(el._id)}
                  // handle={modal}
                />
                <DeleteIcon
                  className={css.delBtn}
                  onClick={() => handleDelItem(el._id)}
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

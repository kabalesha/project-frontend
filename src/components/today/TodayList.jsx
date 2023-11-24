// TodayList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityDrinkSelector } from '../../redux/selectors';
import { del } from '../../redux/portionOfDrinking/slicePortionOfDrinking';
import { modalShow } from '../../redux/showModal/sliceShowModal';
import css from './todayForm/TodayList.module.css';
import { Cup } from './Cup.jsx';
import { Edit } from './todayForm/Edit.jsx';
import { DeleteIcon } from './todayForm/DeleteIcon.jsx';
import { modalName } from '../../redux/changeModal/changeModal';

const TodayList = () => {
  const drinkingList = useSelector(quantityDrinkSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const listContainer = document.querySelector('.listContainer');
    if (listContainer) {
      const windowHeight = window.innerHeight;
      listContainer.style.height = `${windowHeight * 0.33}px`;
    }
  }, []);
  const modal = () => {
    dispatch(modalShow(true));
    dispatch(modalName('edit'));
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
                <Edit className={css.editBtn} onClick={modal} />
                <DeleteIcon
                  className={css.delBtn}
                  onClick={() => dispatch(del(idx))}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No items to display</div>
      )}
    </div>
  );
};

export default TodayList;

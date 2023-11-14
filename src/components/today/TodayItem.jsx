import React from 'react';
import TodayForm from './todayForm/TodayForm';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/portionOfDrinking/slicePortionOfDrinking';
import Modal from '../modalWindow/Modal';
import { showModalSelector } from '../../redux/selectors';
import TodayList from './TodayList';

const Today = () => {
  const a = [
    { id: 1, portion: 250, time: '7:00' },
    { id: 2, portion: 200, time: '9:00' },
    { id: 3, portion: 250, time: '11:00' },
  ];
  const showModal = useSelector(showModalSelector);
  const dispath = useDispatch();
  const addPortion = value => {
    dispath(add(value));
  };
  return (
    <>
      {showModal && (
        <Modal>
          <TodayForm addPortion={addPortion} />
        </Modal>
      )}
      <TodayList />
    </>
  );
};

export default Today;

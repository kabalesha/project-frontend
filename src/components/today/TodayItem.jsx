import React, { useState } from 'react';
import TodayForm from './todayForm/TodayForm';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/portionOfDrinking/slicePortionOfDrinking';
import Modal from '../modalWindow/Modal';
import { activModalSelector, showModalSelector } from '../../redux/selectors';
import TodayList from './TodayList';
import { thunkPortionAddDrinking } from '../../redux/portionOfDrinking/thunkPortionOfDrinking';
import EditForm from '../today/editForm/EditForm';
const Today = () => {
  const [idx] = useState('');
  const showModal = useSelector(showModalSelector);
  const dispath = useDispatch();
  const addPortion = ({ time: date, portion: amount }) => {
    dispath(thunkPortionAddDrinking({ date, amount }));
    console.log('idx', idx);

  const nameActivModal = useSelector(activModalSelector);
  };

  const modalActiv = () => {
    if (nameActivModal === 'add') {
      return <TodayForm addPortion={addPortion} idx={idx} />;
    } else {
      return <EditForm addPortion={addPortion} />;
    }
  };
  return (
    <>
      {showModal && <Modal>{modalActiv()}</Modal>}
      <TodayList />
    </>
  );
};

export default Today;

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
  const [idx, setIdx] = useState('');
  const showModal = useSelector(showModalSelector);
  const dispath = useDispatch();
  const nameActivModal = useSelector(activModalSelector);
  const addPortion = value => {
    dispath(thunkPortionAddDrinking(value));
    console.log('value', value);
    dispath(add(value));
  };

  const modalActiv = () => {
    if (nameActivModal === 'add') {
      return <TodayForm addPortion={addPortion} idx={idx} />;
    } else {
      return <EditForm />;
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

import React, { useState } from 'react';
import TodayForm from './todayForm/TodayForm';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/portionOfDrinking/slicePortionOfDrinking';
import Modal from '../modalWindow/Modal';
import { showModalSelector } from '../../redux/selectors';
import TodayList from './TodayList';
import { thunkPortionAddDrinking } from '../../redux/portionOfDrinking/thunkPortionOfDrinking';
import EditForm from '../today/editForm/EditForm';

const Today = () => {
  const [idx, setIdx] = useState('');
  const showModal = useSelector(showModalSelector);
  const dispath = useDispatch();
  const addPortion = value => {
    dispath(thunkPortionAddDrinking(value));
    console.log('value', value);
    dispath(add(value));
  };

  return (
    <>
      {showModal && (
        <Modal>
          <TodayForm addPortion={addPortion} idx={idx} />
          <EditForm />
        </Modal>
      )}
      <TodayList />
    </>
  );
};

export default Today;

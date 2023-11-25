import React, { useState } from 'react';
import TodayForm from './todayForm/TodayForm';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../modalWindow/Modal';
import { showModalSelector } from '../../redux/selectors';
import TodayList from './TodayList';

import { thunkPortionAddDrinking } from '../../redux/portionOfDrinking/thunkPortionOfDrinking';
import { water } from '../utils/water';
// import { water } from '../utils/water';

const Today = () => {
  const [idx] = useState('');
  const showModal = useSelector(showModalSelector);
  const dispath = useDispatch();
  const addPortion = ({ time: date, portion: amount }) => {
    dispath(thunkPortionAddDrinking({ date, amount }));
    console.log('idx', idx);
    // dispath(add(value));
  };

  return (
    <>
      {showModal && (
        <Modal>
          <TodayForm addPortion={addPortion} idx={idx} />
        </Modal>
      )}
      <TodayList />
    </>
  );
};

export default Today;

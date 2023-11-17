import React, { useState } from 'react';
import TodayForm from './todayForm/TodayForm';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/portionOfDrinking/slicePortionOfDrinking';
import Modal from '../modalWindow/Modal';
import { showModalSelector } from '../../redux/selectors';
import TodayList from './TodayList';

const Today = () => {
  const showModal = useSelector(showModalSelector);
  const dispath = useDispatch();
  const [data, setData] = useState(null);
  const remove = data => {
    setData(data);
  };
  const addPortion = value => {
    dispath(add(value));
  };

  return (
    <>
      {showModal && (
        <Modal>
          <TodayForm addPortion={addPortion} data={data} />
        </Modal>
      )}
      <TodayList remove={remove} />
    </>
  );
};

export default Today;

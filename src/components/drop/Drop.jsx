import React from 'react';
import css from './Drop.module.css';
const Drop = () => {
  return (
    <div className={css.dropdown}>
      <button className={css.dropbtn}>Dropdown</button>
      <div className={css.dropdownContent}>
        <p href="#">Link 1</p>
        <p href="#">Link 1</p>
        <p href="#">Link 2</p>
        <p href="#">Link 3</p>
      </div>
    </div>
  );
};

export default Drop;

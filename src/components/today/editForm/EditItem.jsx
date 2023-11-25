import React from 'react';
import { Cup } from '../Cup';
import { css } from '@emotion/react';

const EditItem = () => {
  const item = JSON.parse(localStorage.getItem('item'));

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '14px',
        backgroundColor: 'rgba(236, 242, 255, 1)',
        margin: ' 24px 0',
        borderRadius: '10px',
      }}
    >
      <Cup className={css.icon} />
      <p
        style={{
          marginLeft: '12px',
          fontSize: '18px',
          color: 'rgba(64, 123, 255, 1)',
        }}
      >
        {item.portion} ml{' '}
      </p>
      <p style={{ marginLeft: '16px', fontSize: '12px' }}>{item.time} PM </p>
    </div>
  );
};

export default EditItem;

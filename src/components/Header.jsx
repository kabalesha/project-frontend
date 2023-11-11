import React from 'react';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispath = useDispatch();
  return (
    <div>
      Header
      <button type="submit" onClick={() => dispath()}></button>
    </div>
  );
};

export default Header;

import React, { useContext, useRef } from 'react';
import { Title } from 'CommonStyle/Title/Title.styled';
import { TitlePart } from '../DailyNorma/DailyNorma.styled';
import {
  CloseBtn,
  ContainerAvatar,
  ContainerSettings,
  WrapperUpload,
} from './Setting.styled';
import Icons from '../../../../icons/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUserProfile } from '../../../../redux/selectors';
import { updateAvatarThunk } from 'redux/auth/thunk';
import FormaUpdateUserProfile from './FormaUpdateUserProfile';
import { ModalContext } from 'components/ModalContext';

const Setting = () => {
  const filePecker = useRef(null);
  const userProfile = useSelector(selectorUserProfile);
  const dispatch = useDispatch();
  const onClose = useContext(ModalContext);

  const handelChange = e => {
    const formaData = new FormData();
    formaData.append('avatarURL', e.target.files[0]);
    dispatch(updateAvatarThunk(formaData));
  };

  const handlerClick = () => {
    filePecker.current.click();
  };

  return (
    <ContainerSettings>
      <CloseBtn
        onClick={() => {
          onClose();
        }}
      >
        <svg width="24" height="24">
          <use href={Icons + '#close'}></use>
        </svg>
      </CloseBtn>
      <Title>Setting</Title>
      <TitlePart $marginBottom="8px">Your photo</TitlePart>
      <WrapperUpload>
        <ContainerAvatar>
          {!userProfile.avatarURL && (
            <div>
              {userProfile.userName ? userProfile.userName.split('')[0] : 'V'}
            </div>
          )}
          {userProfile.avatarURL && (
            <img src={userProfile.avatarURL} alt="avatar" width={80} />
          )}
        </ContainerAvatar>

        <label>
          <input
            className="visually-hidden"
            ref={filePecker}
            type="file"
            accept=".jpg"
            onChange={handelChange}
          />
          <button type="button" onClick={handlerClick}>
            <svg width="16" height="16">
              <use href={Icons + '#arrow-up'}></use>
            </svg>
            <span>Upload a photo</span>
          </button>
        </label>
      </WrapperUpload>
      <FormaUpdateUserProfile
        onClose={() => {
          onClose();
        }}
      />
    </ContainerSettings>
  );
};

export default Setting;

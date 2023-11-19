import React, { useState } from 'react';
import css from './SettingsModal.module.css';
import img from '../../../components/header/AuthNav/outline.png';
import { ReactComponent as UploadIcon } from '../SettingModal/outline.svg';
import { ReactComponent as EyeIcon } from '../SettingModal/eye.svg';

const SettingsModal = ({onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [outdatedPassword, setOutdatedPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showOutdatedPassword, setShowOutdatedPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  const handleTogglePassword = (inputType) => {
    switch (inputType) {
      case 'outdated':
        setShowOutdatedPassword(!showOutdatedPassword);
        break;
      case 'new':
        setShowNewPassword(!showNewPassword);
        break;
      case 'repeat':
        setShowRepeatPassword(!showRepeatPassword);
        break;
      default:
        break;
    }
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.settings_flex_container}>
          <b className={css.modal_setting}>Setting</b>
        </div>

        <p className={css.modal_photo_text}>Your Photo</p>
        <ul className={css.modal_photo_list}>
          <li className={css.modal_list_photo}>
            {selectedFile ? (
              <div className={css.photo_div}>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  className={css.image_modal}
                  alt=""
                />
              </div>
            ) : (
              <div className={css.photo_div}>
                <img src={img} alt="" className={css.image_modal} />
              </div>
             )}
          </li>
          <li className={css.modal_list_upload}>
            <label htmlFor="fileInput">
              <div className={css.upload_container}>
                <span className={css.uploadIcon}>
                  <UploadIcon />
                </span>
                <span className={css.uploadText}>Upload a photo</span>
              </div>
            </label>

            <input
              id="fileInput"
              className={`${css.modal_list_input} ${css.modal_list_upload_input}`}
              type="file"
              name="photo"
              accept="image/jpeg,image/png"
              onChange={handleFileChange}
            />
          </li>
        </ul>

        <form className={css.modal_form_user} >
          <div className={css.all_inp_cont}>
            <div className={css.user_info_container}>
              <div className={css.modal_gender_block}>
                <p className={css.modal_gender_text}>Your gender identity</p>
                <input
                  type="radio"
                  className={css.gender_input}
                  value="woman"
                  id="Woman"
                  name="gender"
                />
                <label htmlFor="Woman" className={`${css.gender_label} `}>
                  Woman
                </label>
                <input
                  type="radio"
                  className={css.gender_input}
                  value="man"
                  id="Man"
                  name="gender"
                />
                <label htmlFor="Man" className={`${css.gender_label} `}>
                  Man
                </label>
              </div>

              <label htmlFor="nameInput" className={css.dataLabel}>
                Your name
              </label>
              <input
                type="text"
                placeholder="Name"
                id="nameInput"
                className={`${css.modal_input} ${css.modal_input_data}`}
              />
              <label htmlFor="emailInp" className={css.dataLabel}>
                E-mail
              </label>
              <input
                type="text"
                placeholder="test@gmail.com"
                id="emailInp"
                className={`${css.modal_input} ${css.modal_input_data}`}
              />
            </div>

            <div className={css.modal_password_inp}>
              <p className={css.modal_password_text}>Password</p>

              <div className={css.passwordInputContainer}>
                <label htmlFor="outdatedPas" className={css.password_label}>
                  Outdated password:
                </label>
                <div className={css.inputContainer}>
                  <input
                    type={showOutdatedPassword ? 'text' : 'password'}
                    value={outdatedPassword}
                    onChange={e => setOutdatedPassword(e.target.value)}
                    placeholder="Password"
                    id="outdatedPas"
                    className={`${css.modal_input} ${css.modal_input_password}`}
                  />
                  <div
                    className={css.togglePasswordIcon}
                    onClick={() => {
                       handleTogglePassword('outdated');
                    }}
                  >
                    <EyeIcon />
                  </div>
                </div>
              </div>

              <div className={css.passwordInputContainer}>
                <label htmlFor="newPas" className={css.password_label}>
                  New Password:
                </label>
                <div className={css.inputContainer}>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    placeholder="Password"
                    id="newPas"
                    className={`${css.modal_input} ${css.modal_input_password}`}
                  />
                  <div
                    className={css.togglePasswordIcon}
                    onClick={() => {
                      handleTogglePassword('new');
                    }}
                  >
                    <EyeIcon />
                  </div>
                </div>
              </div>
              <div className={css.passwordInputContainer}>
                <label htmlFor="repeatPas" className={css.password_label}>
                  Repeat new password:
                </label>

                <div className={css.inputContainer}>
                  <input
                    type={showRepeatPassword ? 'text' : 'password'}
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                    placeholder="Password"
                    id="repeatPas"
                    className={`${css.modal_input} ${css.modal_input_password}`}
                  />
                  <div
                    className={css.togglePasswordIcon}
                    onClick={() => {
                      handleTogglePassword('repeat');
                    }}
                  >
                    <EyeIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className={css.modal_form_submit}>
            Save
          </button>
        </form>
              <button onClick={ onClose} type='button' className={css.closeBtn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
         <path d="M6 18L18 6M6 6L18 18" stroke="#407BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </button>
          </div>
    </div>
  );
};

export default SettingsModal;
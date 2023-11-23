import React, { useState, useRef } from 'react';
import * as Yup from 'yup'; // Import Yup for validation
import { useFormik } from 'formik';
import css from './SettingsModal.module.css';
import img from '../../../components/header/AuthNav/outline.png';
import { ReactComponent as UploadIcon } from '../SettingModal/outline.svg';
import { ReactComponent as EyeIcon } from '../SettingModal/eye.svg';
import {
  addAvatarUserThunk,
  updateUserThunk,
} from '../../../redux/auth/thunkUser';

import { useDispatch } from 'react-redux';
import { addAvatar, update } from '../../../redux/auth/sliceUser';
const SettingsModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState('');
  const [outdatedPassword, setOutdatedPassword] = useState('');
  const [newPassword] = useState('');
  const [repeatPassword] = useState('');
  const [showOutdatedPassword, setShowOutdatedPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const refAva = useRef();

  const [gender, setGender] = useState('man');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ava, setAva] = useState(null);
  const dispath = useDispatch();
  const handleFileChangeAvatar = event => {
    const file = event.target.files[0];
    dispath(addAvatarUserThunk(file));
    dispath(addAvatar(file));
    console.log('file', file);
    const a = setSelectedFile(file);
    console.log('a', a);
  };
  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'name':
        setName(event.target.value);
        break;
      case 'gender':
        setGender(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append('file', ava);
    // dispath(addAvatarUserThunk(formData));
    // dispath(addAvatar(formData));

    dispath(
      updateUserThunk({
        outdatedPassword,
        newPassword,
        repeatPassword,
        name,
        email,
        gender,
      })
    );
    dispath(
      update({
        outdatedPassword,
        newPassword,
        repeatPassword,
        name,
        email,
        gender,
      })
    );
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required('New password is required')
      .min(8, 'Password must be at least 8 characters long')
      .max(64, 'Password must not exceed 64 characters'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Repeat password is required'),
  });


  const formik = useFormik({
    initialValues: {
      newPassword: '',
      repeatPassword: '',
    },
    onSubmit: async values => {
      // Handle form submission logic here
      console.log('submit', values);
    },
    validationSchema: Yup.object().shape({
      newPassword: Yup.string()
        .required('New password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(64, 'Password must not exceed 64 characters'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Repeat password is required'),
    }),
  });
  const handleFileChange = event => {
    const file = event.target.files[0];
    console.log('file', file);
    // setAva(file);
    const formData = new FormData();
    formData.append('avatarURL', file);
    dispath(addAvatarUserThunk(formData));
    dispath(addAvatar('555'));
    console.log('file', file);
    const a = setSelectedFile(file);
    console.log('a', a);
    // setSelectedFile(URL.createObjectURL(file));

  };
  const handleClick = () => {
    // refAva.current.click();

  };
  const handleTogglePassword = inputType => {
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
              // ref={refAva}
            />
          </li>
        </ul>

        <form className={css.modal_form_user} onSubmit={handleSubmit}>
          <div className={css.all_inp_cont}>
            <div className={css.user_info_container}>
              <div className={css.modal_gender_block}>
                <p className={css.modal_gender_text}>Your gender identity</p>
                <input
                  checked={gender === 'woman'}
                  onChange={handleChange}
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
                  checked={gender === 'man'}
                  onChange={handleChange}
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
                onChange={handleChange}
                type="text"
                placeholder="Name"
                id="nameInput"
                name="name"
                value={name}
                className={`${css.modal_input} ${css.modal_input_data}`}
              />
              <label htmlFor="emailInp" className={css.dataLabel}>
                E-mail
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                value={email}
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
                    value={formik.values.newPassword}
                    onChange={formik.handleChange('newPassword')}
                    onBlur={formik.handleBlur('newPassword')}
                    placeholder="Password"
                    id="newPas"
                    className={`${css.modal_input} ${
                      css.modal_input_password
                    } ${
                      formik.touched.repeatPassword &&
                      formik.errors.repeatPassword
                        ? css.inputError
                        : ''
                    }`}
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
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <div className={css.error}>{formik.errors.newPassword}</div>
                )}
              </div>
              <div className={css.passwordInputContainer}>
                <label htmlFor="repeatPas" className={css.password_label}>
                  Repeat new password:
                </label>
                8:23
                <div className={css.inputContainer}>
                  <input
                    type={showRepeatPassword ? 'text' : 'password'}
                    value={formik.values.repeatPassword}
                    onChange={formik.handleChange('repeatPassword')}
                    onBlur={formik.handleBlur('repeatPassword')}
                    placeholder="Password"
                    id="repeatPas"
                    className={`${css.modal_input} ${
                      css.modal_input_password
                    } ${
                      formik.touched.repeatPassword &&
                      formik.errors.repeatPassword
                        ? css.inputError
                        : ''
                    }`}
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
                {formik.touched.repeatPassword &&
                  formik.errors.repeatPassword && (
                    <div className={css.error}>
                      {formik.errors.repeatPassword}
                    </div>
                  )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={css.modal_form_submit}
            onClick={handleClick}
          >
            Save
          </button>
        </form>
        <button onClick={onClose} type="button" className={css.closeBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#407BFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;

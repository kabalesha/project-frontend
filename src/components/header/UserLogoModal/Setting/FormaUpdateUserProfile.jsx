import React from 'react';
import {
  Button,
  FormLabel,
  FormLabelRadio,
  TitlePart,
  WrapperRadio,
} from '../DailyNorma/DailyNorma.styled';
import {
  ContainerForm,
  InputSettingEdit,
  WrapperForma,
  WrapperFormaLeft,
  WrapperFormaMain,
  WrapperFormaRight,
} from './Setting.styled';
import { useFormik } from 'formik';
import { updateUserProfileSchema } from 'js/validation/schemas';

import { InputError } from 'components/forms/InputError.styled';
import PasswordInput from 'components/forms/PasswordInput/PasswordInput';
import { PasswordInputWrapper } from 'components/forms/PasswordInput/PasswordInput.styled';
import PasswordToolTip from 'components/forms/PasswordToolTip/PasswordToolTip';
import { PasswordMeter } from 'components/forms/PasswordMeter.styled';
import { calculateStrength } from 'js/validation/passwordStrength';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUserProfile } from 'redux/auth/selectors';
import { updateUserProfileThunk } from 'redux/auth/thunk';

const FormaUpdateUserProfile = ({ onClose }) => {
  const userProfile = useSelector(selectorUserProfile);
  const dispatch = useDispatch();

  const {
    values,
    touched,
    errors,
    setFieldValue,
    handleSubmit,
    handleChange,
    handleBlur,
    // resetForm,
  } = useFormik({
    initialValues: {
      gender: userProfile.gender,
      name: userProfile.userName,
      email: userProfile.email,
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },
    validationSchema: updateUserProfileSchema,
    onSubmit: values => {
      dispatch(
        updateUserProfileThunk({
          gender: values.gender,
          userName: values.name,
          email: values.email,
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        })
      )
        .unwrap()
        .then(() => {
          onClose();
        });
    },
  });

  const handlePasswordChange = e => {
    const password = e.target.value;
    const score = calculateStrength(password);

    setFieldValue('password', password);
    setFieldValue('strengthScore', score);
    handleChange(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <WrapperForma>
        <WrapperFormaMain>
          <WrapperFormaLeft>
            <TitlePart $marginBottom="0px" $marginTop="0px">
              Your gender identity
            </TitlePart>
            <ContainerForm>
              <WrapperRadio $marginBottom="28px">
                <FormLabelRadio>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={values.gender === 'female'}
                    // defaultChecked="true"
                  />
                  <div></div>
                  <span>Girl</span>
                </FormLabelRadio>
                <FormLabelRadio>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={values.gender === 'male'}
                  />
                  <div></div>
                  <span>Man</span>
                </FormLabelRadio>
              </WrapperRadio>

              <FormLabel $fontSize="18px" $fontWeight="500">
                Your name
                <InputSettingEdit
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  $error={touched.name && errors.name}
                />
                {touched.name && errors.name && (
                  <InputError>{errors.name}</InputError>
                )}
              </FormLabel>

              <FormLabel $fontSize="18px" $fontWeight="500">
                E-mail
                <InputSettingEdit
                  autoComplete="off"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  $error={touched.email && errors.email}
                />
                {touched.email && errors.email && (
                  <InputError>{errors.email}</InputError>
                )}
              </FormLabel>
            </ContainerForm>
          </WrapperFormaLeft>

          <WrapperFormaRight>
            <TitlePart $marginBottom="0px" $marginTop="0px">
              Password
            </TitlePart>

            <FormLabel>
              Outdated password:
              <PasswordInput
                autoComplete="new-password"
                id="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Old password"
              />
              {touched.oldPassword && errors.oldPassword && (
                <InputError>{errors.oldPassword}</InputError>
              )}
            </FormLabel>
            <FormLabel>
              New Password:
              <PasswordInputWrapper>
                <PasswordInput
                  autoComplete="off"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handlePasswordChange}
                  onBlur={handleBlur}
                  placeholder="New password"
                  // $error={touched.newPassword && errors.newPassword}
                />
                {values.newPassword && (
                  <PasswordToolTip
                    score={values.strengthScore}
                    password={values.newPassword}
                  />
                )}
              </PasswordInputWrapper>
              {values.newPassword && (
                <PasswordMeter $score={values.strengthScore} />
              )}
              {errors.newPassword && (
                <InputError>{errors.newPassword}</InputError>
              )}
            </FormLabel>
            <FormLabel>
              Repeat new password:
              <PasswordInput
                autoComplete="off"
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Repeat password"
                $error={touched.repeatPassword && errors.repeatPassword}
              />
              {touched.repeatPassword && errors.repeatPassword && (
                <InputError>{errors.repeatPassword}</InputError>
              )}
            </FormLabel>
          </WrapperFormaRight>
        </WrapperFormaMain>
        <Button type="submit">Save</Button>
      </WrapperForma>
    </form>
  );
};

export default FormaUpdateUserProfile;

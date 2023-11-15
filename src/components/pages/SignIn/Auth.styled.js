import styled from 'styled-components';
import { color } from '../../../css/base/colors';

import imgHomeBgButle from '../../../images/desctopFrame.png';
import imgHomeBgButleTablet from '../../../images/tabletFrame.png';
import imgHomeBgButlePhone from '../../../images/mobileFrame.png';
import imgHomeBgbubbles from '../../../images/BgBubblesDesk.png';
import imgHomeBgBubbleTablet from '../../../images/bubblesTab.png';
import imgHomeBgBubblePhone from '../../../images/bubblesMob.png';

import { Link } from 'react-router-dom';
import { Form } from 'formik';

export const Wrapper = styled.section`
  background-image: url(${imgHomeBgBubblePhone});
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${imgHomeBgBubbleTablet});
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgHomeBgbubbles});
    background-size: contain;
    background-position: bottom center;
    background-repeat: no-repeat;
  }
`;

export const Box = styled.div`
  min-height: calc(100vh - 68px);

  background-image: url(${imgHomeBgButlePhone});
  background-size: 100%;
  background-position: center bottom 20px;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${imgHomeBgButleTablet});
    background-size: 100%;
    background-position: right -100px bottom 56px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgHomeBgButle});
    background-size: 70%;
    background-position: top 0px left -81px;
    background-repeat: no-repeat;
    margin-top: 0%;
  }
`;

export const AllForm = styled.div`
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 196px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  display: block;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;

  @media screen and (min-width: 1440px) {
    min-width: 336px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
    //margin-right: 198px;
    margin-left: 833px;
    margin-top: 113px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &:not(:first-child) {
    align-items: center;
  }

  margin-top: 24px;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-end;
    margin-right: 104px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  padding: 12px 10px;
  border: 1px solid ${color.secondary.gray};
  background-color: ${color.primary.white};
  border-radius: 6px;
  margin-bottom: 10px;
  font-weight: 400;
  min-width: 280px;
  font-size: 16px;
  line-height: 20px;
  color: ${color.primary.blue};
  &::placeholder {
    color: ${color.secondary.azure};
  }

  &:last-child {
    margin-bottom: 16px;
  }

  &:focus {
    outline: none;
    border-color: ${color.secondary.gray};
    box-shadow: 0 0 5px ${color.secondary.gray};
  }

  @media screen and (min-width: 768px) {
    min-width: 336px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;

export const StyledPasswordInput = styled.div`
  position: relative;
  display: inline-block;

  svg.eye {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    fill: none;
    stroke: ${color.primary.blue};
    stroke-width: 5px;
  }
`;

export const SigninButton = styled.button`
  background-color: ${color.primary.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  border: none;
  min-width: 280px;
  padding: 8px 30px;
  color: ${color.primary.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    min-width: 336px;
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;

export const LinkToPage = styled(Link)`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  margin-bottom: 6px;
  color: ${color.primary.blue};
  @media screen and (min-width: 1440px) {
    margin-left: 730px;
  }
`;
export const ErrorM = styled.div`
  color: ${color.secondary.tomato};
  margin-bottom: 8px;
`;
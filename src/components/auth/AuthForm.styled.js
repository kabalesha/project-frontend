import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Title = styled.h1`
text-align: start;
color: #2F2F2F;
font-size: 26px;
line-height: 1.23;
font-weight: 500;
margin-bottom: 0;
`;

export const Form = styled.form`
  text-align: start;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const Input = styled.input`

  width: 254px;
  padding: 12px 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #D7E3FF;

  ::-webkit-input-placeholder {
  color: #2F2F2F;
  line-height: 1.25;
}
  color: #2F2F2F;
  &::placeholder {
    color: #9EBBFF;
  }
  
 @media screen and (min-width: 768px) {
    width: 314px;
    
  }
  @media screen and (min-width: 1440px) {
    width: 362px;
    
  }
`;

export const RegisterButton = styled.button`
  margin: 16px 0;
  padding: 10px 30px;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 500;
  width: 280px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  cursor: pointer;
  color: #FFFFFF;
  background-color: #407BFF;

  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const SignInLink = styled(Link)`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  margin-bottom: 6px;
  color: #407BFF;
  }
`;
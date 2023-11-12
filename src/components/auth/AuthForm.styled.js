import styled from 'styled-components';

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
  padding: 10px 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #D7E3FF;

  ::-webkit-input-placeholder {
  color: #2F2F2F;
  line-height: 1.25;
}
  :-moz-placeholder {
  color: #2F2F2F;
}
::placeholder {
  color: #2F2F2F;
}

 @media screen and (min-width: 768px) {
    width: 310px;
    
  }
//   @media screen and (min-width: 768px) {
//     width: 358px;
    
//   }
`;

export const RegisterButton = styled.button`
  margin: 16px 0;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 500;
  width: 280px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #FFFFFF;
  background-color: #407BFF;

  @media screen and (min-width: 768px) {
    width: 336px;
  }
`;

export const SignInLink = styled.p`
color: #407BFF;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin: 0;
`

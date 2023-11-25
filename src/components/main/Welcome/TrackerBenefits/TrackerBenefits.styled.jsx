import styled from 'styled-components';

export const BenefitsList = styled.ul`
  font-size: 16px;
  line-height: calc(20 / 16);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 768px;
    align-items: center;
    justify-content: start;
    gap: 116px;
  }

@media screen and (min-width: 1440px) {
    display: block;
    margin-bottom: 24px;
  }
`;
export const BenefitsItems = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;

  &:not(:last-child) {
     margin-bottom: 16px
  }

  @media screen and (min-width: 768px)  {
   margin-bottom: 16px;
   }
`;

export const Descr = styled.p`
  width: 197px;
  font-size: 24px;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 26px;
    line-height: 1.23;
  }
`;
export const Container = styled.div`
  margin-bottom: 40px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 768px;
    margin-bottom: 60px;
  }

  @media only screen and (min-width: 1440px) {
    width: 439px;
    font-size: 26px;
    margin-right: 81px;
    margin-bottom: 0;
  }

`;

export const Button = styled.button`
display: block;
margin: 0;
width: 280px;
color:  #FFF;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;
padding: 8px 30px;

border-radius: 10px;
border: none;
background: #407BFF;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

@media screen and (min-width: 768px)  {
     width: 336px;
     font-size: 18px;
     }
@media screen and (min-width: 1440px)  {
     width: 384px;
     font-size: 18px;
     }
`;
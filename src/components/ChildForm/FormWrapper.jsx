import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  margin-top:15px;
  margin-left:15px;
  flex-wrap: wrap;
  > div {
    width: calc(50% - 20px);
    margin: 0 10px 0 0;
  }
  background-color:#ffffff;
  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;

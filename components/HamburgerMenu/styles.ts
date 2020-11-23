import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  top: 30px;
  left: 30px;

  width: 30px;
  height: 21px;
  
  cursor: pointer;
  div {
    width: 100%;
    height: 3px;
    background-color: #000; 
  }
  .two, .three {
    margin-top: 6px;
  }  
`;

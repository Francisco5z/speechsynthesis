import styled from 'styled-components';

export const Container = styled.div<{ extend: boolean }>`
  ${props => props.extend === false && `margin-left: -500px;`}

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: 250ms;

  z-index: 5;

  color: #000;

  height: 100vh;
  width: 300px;

  top: 0px;
  left: 0px;

  padding: 20px 5px 10px 5px;

  background-color: #FFF;

  box-shadow: 0 4px 4px 0 rgba(60,64,67,0.302), 0 8px 12px 6px rgba(60,64,67,0.149);

  position: absolute;

  .item-settings {
    position: absolute;

    bottom: 30px;
  }

  .saved-texts-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 95%;
    height: 45px;

    /* padding: 0 40px; */
  }
`; 

export const SideBarItem = styled.div`
  width: 95%;
  height: 45px;
  
  border: 1px solid #eee;
  border-radius: 50px;

  padding: 0 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  transition: 250ms;

  :hover {
    opacity: 0.7;
    border: 1px solid #AAA;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 15px;
  }

  .save-text {
    width: 80%;
    height: 35px;

    margin-top: 15px;

    background-color: #FFF;

    border: 0;
    border-radius: 7px; 

    transition: 250ms;
    :hover {
      opacity: 0.7;
    }
  }

  .speak-pause-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 10px;

    padding: 0 30px;

    button {
      width: 150px;
      height: 35px;

      border: 0;
      border-radius: 7px;

      margin: 0 15px;

      transition: 250ms;
      :hover {
        opacity: 0.7;
      }
    }
  }
`;

export const SpeechContent = styled.textarea`
  width: 450px;
  height: 400px;

  border: 0;

  resize: none;

  border: 2px solid #eee;
  border-radius: 7px;
  padding: 5px;
`;

export const SpeakPauseButton = styled.button`
  background-color: #7159C1;
  color: #FFF;
`;

export const ClearSpeechContentButton = styled.button`
  background-color: #fff;
`;

export const SpeechContentBox = styled.div<{ outlineActive: boolean }>`
  ${props => props.outlineActive && `
    textarea {
      border: 2px solid red;
    }
    span {
      color: red;
    }
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
`;

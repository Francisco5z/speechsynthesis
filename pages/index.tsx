import { ChangeEvent, useEffect, useState } from "react";
import SideBar from "../components/SideBar";

import { Container, SpeechContent, SpeakPauseButton, ClearSpeechContentButton, SpeechContentBox } from "../styles/Index";

export default function Home() {
  const [speechContent, setSpeechContent] = useState('');
  const [speechContentLength, setSpeechContentLength] = useState(0);
  const [speakPauseText, setSpeakPauseText] = useState('Ler');
  const [speechContentIsBigger, setSpeechContentIsBigger] = useState(false);


  const MaxLength = 1500;

  function handleSpeakPause() {
    const utter = new SpeechSynthesisUtterance();

    utter.addEventListener('end', () => {
      setSpeakPauseText('Ler')
    });

    if (speakPauseText === 'Ler') {

      setSpeakPauseText('pausar');  

      utter.text = speechContent
      utter.lang = 'pt-BR';
      utter.rate = 2;
      utter.volume = 100
      
      speechSynthesis.speak(utter);
    }
    if (speakPauseText === 'pausar') {
      setSpeakPauseText('retomar');

      speechSynthesis.pause();
    }
    if (speakPauseText === 'retomar') {
      setSpeakPauseText('pausar');

      speechSynthesis.resume();
    }
  }

  function clearSpeechContent() {
    setSpeechContent('');

    localStorage.setItem('Test', speechContent)
  }

  function handleSetSpeechContent(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value

    if (value.length <= MaxLength) {
      setSpeechContent(value)
      setSpeechContentIsBigger(false);
      setSpeechContentLength(value.length);

      return
    }

    setSpeechContentIsBigger(true);
  }

  function handleSaveText() {
    const title = window.prompt('Text title: ');

    setCacheValue();
    setLocalStorageItem();

    function setCacheValue() {
      const cacheKey = 'SAVE_TEXTS_KEY_CACHE';

      const oldValues = localStorage.getItem(cacheKey).split(',');

      oldValues.push(title);
      const serializedValues = oldValues.filter(i => i.length !== 0);

      localStorage.setItem(cacheKey, JSON.stringify(serializedValues));
    }
    function setLocalStorageItem() {
      localStorage.setItem(title, speechContent);
    }
  }

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      speechSynthesis.cancel();
    });
  }, []);

  return (
    <Container>
      <SideBar />

      <h1> Sintetizador de voz </h1>

      <SpeechContentBox outlineActive={speechContentIsBigger}>
        <SpeechContent
          value={speechContent} 
          onChange={handleSetSpeechContent}
          placeholder="Texto para ser lido"
        />
        <span>{speechContentLength}/{MaxLength}</span>
      </SpeechContentBox>

      <div className="speak-pause-container">
        <SpeakPauseButton onClick={handleSpeakPause}> {speakPauseText} </SpeakPauseButton>
        <ClearSpeechContentButton onClick={clearSpeechContent}> Limpar </ClearSpeechContentButton>
      </div>
      <button className="save-text" onClick={handleSaveText}> Salvar </button>
    </Container>
  )
}

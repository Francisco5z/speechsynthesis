import { useEffect, useState } from "react";
import { Container } from "./styled";

export default function ListSavedTexts() {
  const [savedTexts, setSaveTexts] = useState<string[]>([])

  function getSavedTexts() {
    const savedTextKeyCache = localStorage.getItem('SAVE_TEXTS_KEY_CACHE')?.split(','); 

    if (savedTextKeyCache) {
      const keyCache: string[] = savedTextKeyCache
      
      const savedTextsArr = []

      keyCache.forEach(key => {
        const savedText = localStorage.getItem(key.trim());

        savedTextsArr.push(savedText);
      });

      setSaveTexts(savedTextsArr);
    }
    console.log(savedTexts)
  }
  
  useEffect(() => getSavedTexts(), [])
  
  return (
    <Container>
      
    </Container>
  )
}
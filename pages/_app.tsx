import { useEffect } from 'react';
import { AppProvider } from '../context/app';
import GlobalStyles from '../styles/Global';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!localStorage.getItem('SAVE_TEXTS_KEY_CACHE')) {
      localStorage.setItem('SAVE_TEXTS_KEY_CACHE', '');
    }
  }, []);

  return (
    <AppProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp

import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { MyContext } from '../contexts/MyContext';

import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  const I18N_STORAGE_KEY = "i18nextLng";
  useEffect(() => {
    localStorage.setItem(I18N_STORAGE_KEY, navigator.language);
  }, []);

  return (
    <MyContext>
      <Component {...pageProps} />
      <GlobalStyle />
    </MyContext>
  )
}

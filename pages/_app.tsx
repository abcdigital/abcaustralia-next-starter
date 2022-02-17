import { AppProps } from 'next/app';
import '@abcaustralia/nucleus/css/root.css';
import '../styles/root.css';
import { GlobalStyles } from '@abcaustralia/nucleus/es6';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyles>
      <Component {...pageProps} />
    </GlobalStyles>
  );
}

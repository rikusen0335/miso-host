import * as React from 'react';
import type { AppProps } from 'next/app';
import 'destyle.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

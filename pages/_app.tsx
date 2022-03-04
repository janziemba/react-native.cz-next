import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import { AppProps } from 'next/app';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
);

export default App;

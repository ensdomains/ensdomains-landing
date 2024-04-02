import 'normalize.css';

import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { Head } from '../components/Head';

const App = ({ pageProps, Component }: AppProps) => {
    return (
        <>
            <Head />
            <Component {...pageProps} />
        </>
    );
};

export default appWithTranslation(App);

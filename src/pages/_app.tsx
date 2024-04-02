import { AppProps } from 'next/app'
import { Head } from '../components/Head'
import 'normalize.css'
import { appWithTranslation } from 'next-i18next'

const App = ({ pageProps, Component }: AppProps) => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)

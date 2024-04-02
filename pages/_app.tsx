import { AppProps } from 'next/app'
import {Head} from '../src/_/components/Head'

const App = ({ pageProps, Component }: AppProps) => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}

export default App

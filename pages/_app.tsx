import { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/swiper.css'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

function MyApp({ Component, pageProps }:AppProps) {
  
  return (
    <>
      <Head>
        <title>닥터처방</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp

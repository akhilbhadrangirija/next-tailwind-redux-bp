import '../styles/globals.css'

import { BaseProvider, LightTheme } from 'baseui'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import SEO from '../next-seo.config'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { store } from '../redux/store'
import { styletron } from '../styletron'

//
// const engine = new Styletron()
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <DefaultSeo {...SEO} />
        <StyletronProvider value={styletron}>
          <BaseProvider theme={LightTheme}>
            <Component {...pageProps} />
          </BaseProvider>
        </StyletronProvider>
      </Provider>
    </>
  )
}

export default MyApp

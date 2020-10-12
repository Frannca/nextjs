import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from 'styles/theme'
import { CssBaseline } from '@material-ui/core'

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>SiteFácil</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="Next.js starter project." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App

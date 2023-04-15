import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return(<
    div>
      <Head>
      <meta name="google-site-verification" content="kPttY16UyrOFgjS9OPsUiju9CekHHEPaWFAZ5hg6ngE" />
      </Head>
      <Component {...pageProps} />
    </div>);
}

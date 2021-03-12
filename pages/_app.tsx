import { AppProps } from 'next/app';
import { NgemvedPropvider } from '@comps/index';
import Head from 'next/head';

export default function NgemvedApp({ Component, pageProps }: AppProps) {
  return (
    <NgemvedPropvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </NgemvedPropvider>
  );
}

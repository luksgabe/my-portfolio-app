import Head from 'next/head';
import { Presentation } from '../components/Presentation/Index';
import Template from '../components/Shared/Template';
import GlobalStyle from '../styles/global';

export default function Home() {
  return (
    <>
      <Head>
          <title>Lucas Gabriel</title>
      </Head>
      <Template>
        <Presentation />
      </Template>
      
      <GlobalStyle />
    </>
  )
}

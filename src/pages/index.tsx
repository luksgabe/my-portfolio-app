import Head from 'next/head';
import { About } from '../components/About';
import { Presentation } from '../components/Presentation/Index';
import { Navbar } from '../components/Shared/Navbar/Index';
import Template from '../components/Shared/Template';


export default function Home() {
  return (
    <>
      <Head>
          <title>Lucas Gabriel</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <Template>
        <Presentation/>
        <About/>
      </Template>
    </>
  )
}

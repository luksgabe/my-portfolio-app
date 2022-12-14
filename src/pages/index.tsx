import Head from 'next/head';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experiences } from '../components/Experiences';
import { Presentation } from '../components/Presentation/Index';
import { Services } from '../components/Services';
import { Footer } from '../components/Shared/Footer';
import { Navbar } from '../components/Shared/Navbar/Index';
import Template from '../components/Shared/Template';


export default function Home() {
  return (
    <>
      <Head>
          <title>Lucas Gabriel</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <Template>
        <Presentation/>
        <About/>
        <Services/>
        <Experiences/>
        <Contact/>
        <Footer/>
      </Template>
    </>
  )
}

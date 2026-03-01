
import Header from './component/Header'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Stats from "./component/Status";
import About from "./component/About";
import Services from "./component/Services";
import Media from "./component/Media";
import Trust from "./component/Trust";
import CTA from "./component/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Header />
      <main>
        <Hero />
        <Stats />
         <About />
         <Services />
         <Media />
          <Trust />
           <CTA /> 
     
      </main>
      <Footer /> 
    </div>
  );
}
























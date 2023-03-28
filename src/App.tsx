import { Lightning } from "phosphor-react";
import About from "./components/About";
import Benefits from "./components/Benefits";
import CountDowm from "./components/CountDowm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modules from "./components/Modules";
import Start from "./components/Start";
import Ticket from "./components/Ticket";
import ConfigScrollReveal from "./scrollanimation/ConfigScrollReveal";

export default () => {

  document.documentElement.scrollTop = 0;

  return(
    <div>
        <ConfigScrollReveal
          delay={150} 
          duration={1000}
          distance={100}
        >
        <div className="flex-1 py-4 flex items-center justify-center gradient text-center text-sm 
        md:text-base sticky top-0">
          <strong className="flex flex-col md:flex-row items-center justify-center gap-2 text-zinc-100">
            <CountDowm/>
          </strong>
        </div>
      </ConfigScrollReveal>
      
      <Header/>
      <Start/>

      {/* <div className="relative">
        <Ticket/>
      </div> */}

      <Benefits/>
      <Modules/>
      <About/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
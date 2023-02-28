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

export default () => {

  document.documentElement.scrollTop = 0;

  return(
    <div>
      <div className="flex-1 py-4 flex items-center justify-center gradient text-center text-sm md:text-base">
        <strong className="flex flex-col md:flex-row items-center justify-center gap-2 text-zinc-100">
          Promoção de lançamento acaba em 
          
          <CountDowm/>
        </strong>
      </div>

      <Header/>
      <Start/>

      <div className="relative">
        <Ticket/>
      </div>

      <Benefits/>
      <Modules/>
      <About/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
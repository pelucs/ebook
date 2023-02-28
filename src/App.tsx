import { Lightning } from "phosphor-react";
import About from "./components/About";
import Benefits from "./components/Benefits";
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
        <strong className="flex items-center justify-center gap-2 text-zinc-100">
          Aproveite a promoção de lançamento que irá durar até o dia 28/02 
          
          <Lightning size={20} weight="bold"/>
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
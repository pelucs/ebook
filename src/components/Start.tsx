import { ArrowDown } from "phosphor-react";

import ButtonBuy from "./ButtonBuy";

import logotipo from '../assets/logotipo-insideagro.svg';
import video from '../assets/video/video.mp4';

import pix from '../assets/icons/pix.svg';
import code from '../assets/icons/code.svg';
import paypal from '../assets/icons/paypal.svg';
import card from '../assets/icons/card.svg';
import ConfigScrollReveal from "../scrollanimation/ConfigScrollReveal";

const methodsPayment: Array<{ icon: string, title: string }> = [
  {
    icon: pix,
    title: "Pix"
  },
  {
    icon: code,
    title: "Boleto"
  },
  {
    icon: card,
    title: "Crédito"
  },
  {
    icon: paypal,
    title: "Paypal"
  },
];

export default () => {

  return(
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 pt-10 md:pt-32 pb-5 px-6 md:px-14 md:min-h-screen">
        <ConfigScrollReveal
          delay={150} 
          duration={1500}
          distance={100}
        >
          <img src={logotipo} alt="Logo InsideAgro"/>
        </ConfigScrollReveal>

        <ConfigScrollReveal
          delay={250} 
          duration={1500}
          distance={100}
        >
          <p className="mt-2 text-2xl">
            Por dentro de informativos e estratégias financeiras voltadas para o agronegócio.
          </p>
        </ConfigScrollReveal>

        <ConfigScrollReveal
          delay={350} 
          duration={1500}
          distance={100}
        >
          <a href="#sobre" className="mt-5 flex items-center gap-2 hover:text-green-primary transition-colors">
            Saiba mais 

            <ArrowDown size={16} className="animate-bounce" weight="bold"/>
          </a>
        </ConfigScrollReveal>

        <ConfigScrollReveal
          delay={450} 
          duration={1500}
          distance={100}
        >
          <div className="w-full mt-5">
            <video src={video} autoPlay className="rounded-2xl w-full"/>
          </div>
        </ConfigScrollReveal>

      </div>

      <div className="md:max-w-[632px] pt-16 pb-16 md:pb-0 md:pt-32 px-6 md:px-14 w-full md:min-h-screen bg-bgY bg-cover bg-center">
        <ConfigScrollReveal
          delay={150} 
          duration={1500}
          distance={100}
        >
          <div className="flex items-center gap-5">
              <div className="py-2 px-4 rounded-md text-zinc-100 uppercase bg-browm-secundary
              text-xl font-bold">
                70% off
              </div>

            <h1 className="text-xl font-bold text-zinc-100">
              Promoção limitada
            </h1>
          </div>
        </ConfigScrollReveal>

        <ConfigScrollReveal
          delay={250} 
          duration={1500}
          distance={100}
        >
          <div className="mt-10 flex flex-col gap-1">
            <h1 className="text-zinc-300 font-bold text-xl">
              de <span className="line-through">R$49,90</span> por apenas
            </h1>

            <strong className="text-6xl font-bold text-zinc-100">
              R$14,90
            </strong>

            <div className="mt-5">
              <ButtonBuy/>
            </div>
          </div>
        </ConfigScrollReveal>

        <ConfigScrollReveal
          delay={350} 
          duration={1000}
          distance={100}
        >
          <div className="mt-5 grid grid-cols-4 gap-1 md:gap-3">
            {methodsPayment.map(item => (
              <div key={item.title} className="p-2 rounded-md bg-browm-secundary text-zinc-100
              flex items-center gap-2">
                <img src={item.icon} className="w-[20px]"/>

                <h1 className="text-xs md:text-base">{item.title}</h1>
              </div>
            ))}
          </div>
        </ConfigScrollReveal>

        <ConfigScrollReveal
          delay={450} 
          duration={1000}
          distance={100}
        >
          <strong className="mt-5 block text-zinc-100">
            Ao realizar o pagamento, o ebook chegará automaticamente no seu endereço de email cadastrado.
          </strong>
        </ConfigScrollReveal>
      </div>
    </div>
  );
}
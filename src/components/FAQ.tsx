import * as Accordion from '@radix-ui/react-accordion';
import { CaretDown } from 'phosphor-react';
import ConfigScrollReveal from '../scrollanimation/ConfigScrollReveal';

const faq: Array<{ id: number, title: string, desc: string }> = [
  {
    id: 1,
    title: "É um curso com vídeo aula?",
    desc: "Não! o InsideAgro é um ebook, um material em pdf que reúne estratégias e informativos do mundo agropecuário."
  },
  {
    id: 2,
    title: "Se comprar agora eu tenho acesso a futuras atualizações?",
    desc: "O acesso é vitalício, você terá acesso para sempre e com direito a receber as atualizações sem precisar pagar nada."
  },
  {
    id: 3,
    title: "Por onde eu acesso o meu ebook depois da compra?",
    desc: "Você irá receber o acesso do ebook por email. Mas para acessar as atualizações é preciso acessar a plataforma da Hotmart com o email que realizou a compra."
  },
  {
    id: 4,
    title: "Como funciona o termo de reembolso?",
    desc: "Para solicitar o reembolso de alguma compra, é necessário que ela esteja dentro do prazo de solicitação de reembolso que é de 7 dias após a compra. Você pode verificar este prazo nas informações do produto, na área Minhas compras."
  },
];

export default () => {

  return(
    <div id="faq" className="h-full bg-white px-6 md:px-14 py-14 pb-24 flex flex-col items-center">
      <ConfigScrollReveal
        delay={150} 
        duration={1500}
        distance={100}
      >        
        <h1 className="font-bold text-3xl text-center">
          Perguntas mais frequentes
        </h1>
      </ConfigScrollReveal>

      <ConfigScrollReveal
        delay={250} 
        duration={1500}
        distance={100}
        styles="w-full"
      >  
        <Accordion.Root type="single" className="w-full mt-10" collapsible>
          {faq.map(item => (
            <Accordion.Item value={`item-${item.id}`} key={item.id} className="overflow-hidden accordion-item">
              <Accordion.Header>
                <Accordion.Trigger className="w-full h-20 flex items-center justify-between border-b 
                border-zinc-300 text-base md:text-xl font-bold hover:text-green-primary transition-colors accordion-trigger
                text-left">
                  <h1 className="w-full max-w-md md:max-w-2xl">
                    {item.title}
                  </h1>

                  <CaretDown weight="bold" size={30} className="accordion-chevron"/>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="text-base md:text-xl text-zinc-500 accordion-content border-b
              border-zinc-300 bg-zinc-200/50">
                <div className="p-4">
                  {item.desc}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </ConfigScrollReveal>
    </div>
  );
}
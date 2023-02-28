import * as Accordion from '@radix-ui/react-accordion';
import { CaretDown } from 'phosphor-react';

const faq: Array<{ id: number, title: string, desc: string }> = [
  {
    id: 1,
    title: "É um curso com vídeo aula?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo inventore aliquam sunt atque voluptatibus, illum deleniti, quaerat doloremque excepturi sint eum dignissimos sequi quae quidem facilis ad aut dicta!"
  },
  {
    id: 2,
    title: "Se comprar agora eu tenho acesso a futuras atualizações?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo inventore aliquam sunt atque voluptatibus, illum deleniti, quaerat doloremque excepturi sint eum dignissimos sequi quae quidem facilis ad aut dicta!"
  },
  {
    id: 3,
    title: "Por onde eu acesso o meu ebook depois da compra?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo inventore aliquam sunt atque voluptatibus, illum deleniti, quaerat doloremque excepturi sint eum dignissimos sequi quae quidem facilis ad aut dicta!"
  },
  {
    id: 4,
    title: "Como funciona o termo de garantia?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo inventore aliquam sunt atque voluptatibus, illum deleniti, quaerat doloremque excepturi sint eum dignissimos sequi quae quidem facilis ad aut dicta!"
  },
];

export default () => {

  return(
    <div id="faq" className="h-full bg-white px-6 md:px-14 py-14 pb-24 flex flex-col items-center">
      <h1 className="font-bold text-3xl">
        Perguntas mais frequentes
      </h1>

      <Accordion.Root type="single" className="w-full mt-10" collapsible>
        {faq.map(item => (
          <Accordion.Item value={`item-${item.id}`} key={item.id} className="overflow-hidden accordion-item">
            <Accordion.Header>
              <Accordion.Trigger className="w-full h-20 flex items-center justify-between border-b 
              border-zinc-300 text-xl font-bold hover:text-green-primary transition-colors accordion-trigger
              text-left">
                {item.title}

                <CaretDown weight="bold" size={30} className="accordion-chevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="text-xl text-zinc-500 accordion-content border-b
            border-zinc-300 bg-zinc-200/50">
              <div className="p-4">
                {item.desc}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
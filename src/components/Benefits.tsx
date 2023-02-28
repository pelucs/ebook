import clock from '../assets/icons/clock.svg';
import book from '../assets/icons/book.svg';
import headset from '../assets/icons/headset.svg';
import retur from '../assets/icons/return.svg';

const cards: Array<{ icon: string, title: string, desc: string }>  = [
  {
    icon: clock,
    title: "Acesso vitalício",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus rutrum."
  },
  {
    icon: book,
    title: "6 módulos",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus rutrum."
  },
  {
    icon: retur,
    title: "7 dias de garantia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus rutrum."
  },
  {
    icon: headset,
    title: "Acesso a consultoria",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus rutrum."
  },
];

export default () => {
  return(
    <div id="beneficios" className="px-6 md:px-14 flex flex-col items-center">
      <h1 className="mt-14 font-bold text-3xl">
        Benefícios que você terá 
      </h1>
      
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
        {cards.map(card => (
          <div key={card.title} className="p-5 max-w-sm w-full bg-zinc-100 shadow-md rounded-md
          flex flex-col gap-3">
            <img src={card.icon} alt={card.title} className="w-14"/>

            <strong className="text-xl">
              {card.title}
            </strong>

            <p className="text-zinc-500">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
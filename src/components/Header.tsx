import ButtonBuy from "./ButtonBuy";

const links: Array<{ value: string, path: string }> = [
  {
    value: "Início",
    path: ""
  },
  {
    value: "Benefícios",
    path: "beneficios"
  },  
  {
    value: "Módulos",
    path: "modulos"
  },
  {
    value: "Sobre",
    path: "sobre"
  },
  {
    value: "FAQ",
    path: "faq"
  },
];

export default () => {

  return(
    <div className="w-full h-20 px-14 flex items-center justify-between absolute top-14 left-0l">
      <div className="flex items-center gap-7">
        {links.map(item => (
          <a 
            href={`#${item.path}`} 
            key={item.value}
            className="font-bold after:content-[''] after:block after:w-0 hover:after:w-full after:h-[2px] 
            after:bg-gradient-to-r after:from-transparent after:to-green-primary after:rounded-full
            after:transition-all hover:text-green-primary after:duration-500"
          >
            {item.value}
          </a>
        ))}
      </div>

      <ButtonBuy/>
    </div>
  );
}
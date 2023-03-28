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
    <div className="w-full h-20 px-6 md:px-14 flex items-center justify-center md:justify-between md:absolute md:top-14">
      <div className="flex items-center justify-center gap-5 md:gap-7">
        {links.map(item => (
          <a 
            href={`#${item.path}`} 
            key={item.value}
            className="link"
          >
            {item.value}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <ButtonBuy/>
      </div>
    </div>
  );
}
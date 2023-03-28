import logopl from '../assets/logotipo-plucs.svg';

export default () => {
  return(
    <div className="py-4 flex flex-col md:flex-row items-center justify-between px-14 bg-green-primary
     text-zinc-100 text-sm md:text-base">
      <h1 className="text-center">
        &copy;2023 - Todos os direitos reservados
      </h1>

      <h1 className="flex items-center gap-2">
        Desenvolvido por 

        <a 
          href="#"
          target="_blank"
          className="relative -top-1"
        >
          <img src={logopl} className="w-[80px]"/>
        </a>
      </h1>
    </div>
  );
}
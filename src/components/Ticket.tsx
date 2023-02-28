import DialogTicket from "./DialogTicket";

export default () => {
  return(
    <div className="w-full px-14 h-16 bg-gradient-to-tr from-green-secundary to-green-primary
    hidden md:flex items-center justify-between text-zinc-100 font-bold text-lg">
      <h1>
        Novo por aqui?
      </h1>
      
      <div className="h-full flex flex-col justify-between">
        <div className="w-4 h-3 bg-[#E9E9E9] rounded-bl-md rounded-br-md"/>
        <div className="w-4 h-3 bg-[#E9E9E9] rounded-tl-md rounded-tr-md"/>
      </div>

      <h1>
        A plataforma está disponibilizando uma cupom de lançamento até o dia 28/02
      </h1>

      <div className="h-full flex flex-col justify-between">
        <div className="w-4 h-3 bg-browm-primary rounded-bl-md rounded-br-md"/>
        <div className="w-4 h-3 bg-[#E9E9E9] rounded-tl-md rounded-tr-md"/>
      </div>

      <DialogTicket/>
    </div>
  );
}
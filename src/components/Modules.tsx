const modules: Array<{ id: number, title: string, desc: string }> = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus rutrum."
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus rutrum."
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus rutrum."
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus rutrum."
  },
  {
    id: 5,
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus rutrum."
  },
  {
    id: 6,
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lacus rutrum."
  },
];

export default () => {
  return(
    <div id="modulos" className="w-full mt-20 px-6 md:px-14 py-14 flex flex-col items-center bg-bgX bg-cover">
      <h1 className="font-bold text-3xl text-zinc-100">
        Conheça os módulos 
      </h1>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {modules.map(module => (
          <div key={module.id} className="flex items-center">
            <div className="flex flex-col items-center justify-center font-bold text-zinc-100
            bg-browm-primary rounded-tl-xl rounded-bl-xl w-full max-w-[110px] h-[110px] p-4">
              <h1 className="text-sm">Módulo</h1>
              <strong className="text-5xl">0{module.id}</strong>
            </div>

            <div className="h-full px-4 bg-zinc-100 rounded-tr-xl rounded-br-xl flex flex-col justify-center">
              <h1 className="text-lg font-bold">{module.title}</h1>
              <p className="text-sm">{module.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-14 text-zinc-100">
        Começar a estudar
      </button>
    </div>
  );
}
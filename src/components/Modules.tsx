import ConfigScrollReveal from "../scrollanimation/ConfigScrollReveal";

const modules: Array<{ id: number, title: string, desc: string }> = [
  {
    id: 1,
    title: "Gestão de custos",
    desc: "Aprenda passo a passo de como ter uma gestão de custo em sua propriedade rural."
  },
  {
    id: 2,
    title: "Administração de finanças",
    desc: "Tenha em mente as vantagens de possuir um gerenciamento em sua propriedade rural."
  },
  {
    id: 3,
    title: "Lucratividade",
    desc: "Descubra as melhores atividades que podem trazer lucro para dentro de sua propriedade rural."
  },
  {
    id: 4,
    title: "Vaca louca",
    desc: "Saiba mais sobre o que é a doença da vaca louca e como prevenir a propagação desse mal."
  },
  {
    id: 5,
    title: "Antes da porteira, dentro da porteira, depois da porteira",
    desc: "Saiba mais sobre a cadeia do agronegócio, o que está dentro e fora de sua propriedade rural."
  },
  {
    id: 6,
    title: "Agricultura digital no Brasil",
    desc: "Confira os resultados de ter uma propriedade rural com recursos digitais."
  },
  {
    id: 7,
    title: "Benefícios da palma forrageira",
    desc: "Descubra as vantagens em trabalhar com a palma forrageira, as inúmeras áreas comerciais em que ela se encaixa."
  },
];

export default () => {
  return(
    <div id="modulos" className="w-full mt-20 px-6 md:px-14 py-14 flex flex-col items-center bg-bgX bg-cover">
      <ConfigScrollReveal
        delay={250} 
        duration={1500}
        distance={100}
      >
        <h1 className="font-bold text-3xl text-zinc-100 text-center">
          Conheça os módulos 
        </h1>
      </ConfigScrollReveal>

      <ConfigScrollReveal
          delay={450} 
          duration={1500}
          distance={100}
      >
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 justify-self-center self-center gap-5">
          {modules.map(module => (
            <div key={module.id} className="flex min-h-[110px] items-center rounded-xl overflow-hidden">
              <div className="h-full flex flex-col items-center justify-center font-bold text-zinc-100
              bg-browm-primary w-full max-w-[110px] p-4">
                <h1 className="text-sm">Módulo</h1>
                <strong className="text-5xl">0{module.id}</strong>
              </div>

              <div className="h-full py-3 px-4 bg-zinc-100 rounded-tr-xl rounded-br-xl flex flex-col justify-center">
                <h1 className="text-lg font-bold leading-tight">{module.title}</h1>
                <p className="text-sm">{module.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ConfigScrollReveal>

      <a href="#" className="mt-14 w-full md:w-[220px] py-3 rounded-md bg-green-700 text-zinc-100 
      text-center shadow-md">
        Começar a estudar
      </a>
    </div>
  );
}
import ebook from '../assets/ebook.svg';
import ConfigScrollReveal from '../scrollanimation/ConfigScrollReveal';

export default () => {
  return(
    <div id="sobre" className="px-6 md:px-14 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center text-center md:text-left">
        <ConfigScrollReveal
          delay={150} 
          duration={1000}
          distance={100}
        >
          <h1 className="font-bold text-4xl text-green-primary">
            Sobre o <span className="text-browm-primary">ebook</span>
          </h1>
        </ConfigScrollReveal>

        <ConfigScrollReveal
          delay={250} 
          duration={1000}
          distance={100}
        >
          <p className="text-zinc-500 mt-2">
            O ebook foi criado com intenção de agrupar estratégias 
            financeiras e informativos do ramo agropecuário em um só 
            material, tendo em vista que atualmente, na internet, existem 
            muitas informações vagas e grande parte das vezes essas 
            informações são tomadas de fake news. Esse material foi 
            desenvolvido com um grande comprometimento
            de Germínia Souza, gestora em agronegócio e gerente de
            marketing digital e por Pedro Lucas, designer gráfico e 
            desenvolvedor web front-end. 
          </p>
        </ConfigScrollReveal>
      </div>
      
      <ConfigScrollReveal
        delay={350} 
        duration={1000}
        distance={100}
      >
        <div className="flex items-center justify-center">
          <img src={ebook}/>
        </div>
      </ConfigScrollReveal>
    </div>
  );
}
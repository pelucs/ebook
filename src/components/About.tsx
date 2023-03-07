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
            Criadores do <span className="text-browm-primary">ebook</span>
          </h1>
        </ConfigScrollReveal>

        <ConfigScrollReveal
          delay={250} 
          duration={1000}
          distance={100}
        >
          <p className="text-zinc-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est amet optio excepturi temporibus
            voluptates error culpa molestias sint deleniti distinctio, veritatis beatae doloribus veniam 
            eaque, saepe enim? Nisi, hic totam. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Totam eligendi molestiae ipsum, consequuntur non quis in dignissimos maxime 
            praesentium placeat dolores mollitia ipsa saepe consequatur nulla nostrum architecto 
            voluptatibus iusto.
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
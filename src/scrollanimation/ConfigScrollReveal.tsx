import { useRef, useEffect, ReactNode } from 'react';
import sr from "../scrollanimation/ScrollReveal";

interface ConfigScrollRevealProps{
  children: ReactNode;
  styles?: string;
  delay: number;
  distance: number;
  duration: number;
}

export default (props: ConfigScrollRevealProps) => {

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if(scrollRef.current){
      const config = {
        origin: 'top',
        duration: props.duration,
        delay: props.delay,
        distance: `${props.distance}px`,
        scale: 1,
        easing: 'ease'
      }
    
      sr.reveal(scrollRef.current, config);
    }

  }, []);

  return(
    <section
      className={props.styles}
      ref={scrollRef}
    >
      {props.children}
    </section>
  );
}
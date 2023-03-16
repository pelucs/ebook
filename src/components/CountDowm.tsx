import { Lightning } from "phosphor-react";
import { useEffect, useState } from "react";

export default () => {

  const [date, setDate] = useState<string>("");

  useEffect(() => {

    let countDownDate = new Date('Mar 29, 2023, 23:59:99').getTime(); //DATA DA CONTAGEM REGRESSIVA

    setInterval(() => {

      let now = new Date().getTime(), //DATA ATUAL
          distance = countDownDate - now; //DISTÂNCIA ENTRE AS DATAS
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((distance % (1000 * 60)) / 1000)

      formatDate(days.toString(), hours.toString(), minutes.toString(), seconds.toString());

    }, 1000);

  }, []);

  const formatDate = (days: string, hours: string, minutes: string, seconds: string) => {

    let dayF = days.length === 1 ? `0${days}` : days,
        hoursF = hours.length === 1 ? `0${hours}` : hours,
        minutesF = minutes.length === 1 ? `0${minutes}` : minutes,
        secondsF = seconds.length === 1 ? `0${seconds}` : seconds;

    setDate(`${dayF}d ${hoursF}h ${minutesF}m ${secondsF}s`);
    
  }

  return(
    <span className="text-xl flex items-center gap-2">
      {date} <Lightning size={20} weight="bold"/>
    </span>
  );
}

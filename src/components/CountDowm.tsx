import { Lightning } from "phosphor-react";
import { useEffect, useState } from "react";

export default () => {

  const [date, setDate] = useState<string>("Promoção acaba em 00d 00h 00m 00s");

  useEffect(() => {

    let countDownDate = new Date('Mar 7, 2023, 23:59:99').getTime(); //DATA DA CONTAGEM REGRESSIVA

    setInterval(() => {

      let now = new Date().getTime(), //DATA ATUAL
          distance = countDownDate - now; //DISTÂNCIA ENTRE AS DATAS
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((distance % (1000 * 60)) / 1000)

      formatDate(days, hours, minutes, seconds);

      if(distance < 0){
        setDate("Promoção de lançamento EXPIRADA");
      }

    }, 1000);

  }, []);

  const formatDate = (days: number, hours: number, minutes: number, seconds: number) => {

    let dayF = days <= 9 ? `0${days}` : days,
        hoursF = hours <= 9 ? `0${hours}` : hours,
        minutesF = minutes <= 9 ? `0${minutes}` : minutes,
        secondsF = seconds <= 9 ? `0${seconds}` : seconds;

    setDate(`Promoção de lançamento acaba em ${dayF}d ${hoursF}h ${minutesF}m ${secondsF}s`);
  }

  return(
    <span className="text-xl flex items-center gap-2">
      {date} <Lightning size={20} weight="bold"/>
    </span>
  );
}

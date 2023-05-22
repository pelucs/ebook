import { useEffect, useState } from "react";

export default () => {

  const [date, setDate] = useState<string>("00d 00h 00m 00s");
  const [expired, setExpired] = useState<boolean>(false);

  useEffect(() => {

    let countDownDate = new Date('Jun 5, 2023 23:59:99').getTime(); //DATA DA CONTAGEM REGRESSIVA

    setInterval(() => {

      let now = new Date().getTime(), //DATA ATUAL
          distance = countDownDate - now; //DISTÂNCIA ENTRE AS DATAS
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((distance % (1000 * 60)) / 1000)

      formatDate(days, hours, minutes, seconds);

      if(distance < 0){
        setExpired(true);
      }

    }, 1000);

  }, []);

  const formatDate = (days: number, hours: number, minutes: number, seconds: number) => {

    let dayF = days <= 9 ? `0${days}` : `${days}`,
        hoursF = hours <= 9 ? `0${hours}` : `${hours}`,
        minutesF = minutes <= 9 ? `0${minutes}` : `${minutes}`,
        secondsF = seconds <= 9 ? `0${seconds}` : `${seconds}`;

    setDate(`${dayF}d ${hoursF}h ${minutesF}m ${secondsF}s`);
  }

  return(
    <div>
      {expired ? (
        <span className="text-xl flex items-center gap-2">
          Promoção de lançamento expirada!
        </span>
      ) : (
        <span className="text-base md:text-xl flex items-center gap-2">
          Promoção de lançamento acaba em <br className="block md:hidden"/> {date} &#x1F557;
        </span>
      )}
    </div>
  );
}

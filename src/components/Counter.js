import { useEffect, useState } from "react";

const Counter = ({targetTime}) => {
  const [timeObj, setTimeObj] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const getCountDownTime = (targetTime) => {
    const timeNow = new Date().getTime() / 1000;

    const secondsLeft = targetTime - timeNow < 0 ? 0 : targetTime - timeNow;

    const days = secondsLeft / 86400
    const hours = (secondsLeft / 3600) % 24;
    const minutes = (secondsLeft / 60) % 60;
    const seconds = secondsLeft % 60;

    return {
      days: Math.floor(days),
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds)
    }
  }

  useEffect(() => {
    if (!targetTime) return;

    setTimeObj(getCountDownTime(targetTime));

    const timer = setInterval(() => {
      setTimeObj(
        getCountDownTime(targetTime)
      )
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [targetTime])

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        {timeObj.days}

        <div>days</div>
      </div>
      <div>
        {timeObj.hours}
        <div>hours</div>
      </div>
      <div>
        {timeObj.minutes}
        <div>minutes</div>
      </div>
      <div>
        {timeObj.seconds}
        <div>seconds</div>
      </div>
    </div>
  )
}

export default Counter;

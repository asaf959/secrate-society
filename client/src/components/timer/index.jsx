import { useEffect, useState } from "react";

function Timer() {
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <div>
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
}
export default Timer
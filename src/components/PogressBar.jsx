import { useEffect, useState } from "react";

export default function ProgressBar({timer}) {

  const [remainingTime, setRemainingTime] = useState(timer);
//setInterval define a function that will be executed every couple of milliseconds (here 10 ms)
useEffect(() => {
  const interval = setInterval(() => {
    console.log('INTERVAL')
    setRemainingTime(prevTime => prevTime - 10)
  }, 10);
  return () => {
    console.log('Cleaning up interval')
    clearInterval(interval);
  };
}, []);

return <progress value={remainingTime} max={timer}/>
}
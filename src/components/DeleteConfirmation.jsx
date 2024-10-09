import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
const [remainingTime, setRemainingTime] = useState(TIMER);
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
}, [])



  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log('Cleaning up timer')
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER}/>
    </div>
  );
}

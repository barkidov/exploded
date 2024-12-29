import { useState } from "react";
import { Button } from "../button/Button";
import { CounterDisplay } from "../counterDisplay/CounterDisplay";
import style from "./Counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(5);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [exploded, setExploded] = useState(false)

  const startDecreasing = () => {
    if (intervalId) return;

    const id = setInterval(() => {
      setCount((count) => {
        if (count <= 1) {
          clearInterval(id);
          setIntervalId(null);
          setExploded(true)
          return 0;
        }
        return count - 1;
      });
    }, 1000)
  };
  const resetCount = () => {
    if (intervalId)
    clearInterval(intervalId)
    setCount(5);
    setIntervalId(null)
    setExploded(false)
  };

  return (
    <div className={style.counterContainer}>
      <CounterDisplay count={count} exploded={exploded}/>
      <div className={style.buttonsContainer}>
        <Button onClick={startDecreasing} disabled={count === 0}>
        ☢
        </Button>
        <Button onClick={resetCount} disabled={count === 10}>
        ⟳
        </Button>
      </div>
    </div>
  );
};

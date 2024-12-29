import style from "./CounterDisplay.module.css";

type CounterDisplayType = {
  count: number;
  exploded: boolean
};

export const CounterDisplay = ({ count, exploded }: CounterDisplayType) => {
  const displayClass = count < 4 ? style.redCount : "";
  return (
    <div className={`${style.counterDisplay} ${displayClass}`}>{exploded ? <img src="https://media.tenor.com/OMQvHj3-AsMAAAAM/kaboom-boom.gif"/>: count}</div>
  );
};

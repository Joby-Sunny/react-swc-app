import React from 'react';
import style from './style.module.css';

export function App() {
  const [count, setCount] = React.useState(0);

  const toggleCount = (rate) => () => setCount((c) => c + rate);

  return (
    <div className={style.container}>
      <h2> React Server Side Works </h2>
      <p>{count}</p>
      <div>
      <button onClick={toggleCount(1)}>Increment</button>
      <button onClick={toggleCount(-1)}>Decrement</button>
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";

export const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);
  const increment = () => setValue(prev => prev + 1);
  const decrement = () => setValue(prev => prev - 1);

  const renderTimes = useRef<number>(0);

  useEffect(() => {
    renderTimes.current += 1;
  },[value]);

  const ref = useRef<HTMLInputElement>(null!);

  const focusInput = () => {
    ref.current.focus();
  }

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment} >+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-renderd {renderTimes.current}</div>
      <input ref={ref} type="text"></input>
      <button onClick={focusInput} >Click Me</button>
    </div>
  );
};
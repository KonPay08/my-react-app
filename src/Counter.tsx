import React, { useState } from "react";

export const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);
  const increment = () => setValue(prev => prev + 1);
  const decrement = () => setValue(prev => prev - 1);

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment} >+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}
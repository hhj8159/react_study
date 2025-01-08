import React, { useState } from 'react';


// useCount hook
const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount(prev => prev + 1);
  const decreaseCount = () => setCount(prev => Math.max(prev - 1, 0));
  return [count, increaseCount, decreaseCount];
}

export default useCounter;

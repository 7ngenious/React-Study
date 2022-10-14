import React from 'react';
import { useState } from 'react';
const Home = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.dir(count);
  };

  // const onClick = () => {
  //   setCount((count) => count + 1);
  //   setCount((count) => count + 1);
  //   console.dir(count);
  // };
  return (
    <div className='Wrap'>
      <div>{count}</div>
      <button onClick={onClick}>+1</button>
    </div>
  );
};

export default Home;

import { useState, useEffect } from 'react';

function CounterTimer(){

  const [theCount, setTheCount] = useState(0);

  useEffect(() => {
    console.log('hey the use effect hook runs')
    let intervalId = setInterval(() => {
      setTheCount((prevCount) => prevCount + 1)
    }, 1000);

    return () => {
      console.log('cleanup from useEffect')
      clearInterval(intervalId);
    };
  }, [])

  return (
    <div>
      <p>The CounterTimer count is: {theCount}</p>
    </div>
  )
}

export default CounterTimer;
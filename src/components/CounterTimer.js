import { useState, useEffect } from 'react';

function CounterTimer(){

  const [theCount, setTheCount] = useState(0);

  useEffect(() => {
    console.log('hey the use effect hook runs')
    setInterval(() => {
      setTheCount((prevCount) => prevCount + 1)
    }, 1000);
  }, [])

  return (
    <div>
      <p>The CounterTimer count is: {theCount}</p>
    </div>
  )
}

export default CounterTimer;
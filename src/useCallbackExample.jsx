import { useState, useCallback, memo } from 'react';
import './App.css';

const Button = ({handleClick, name}) => {
  console.log(`${name} rendered`)
  return <button onClick={handleClick}>{name}</button>
}

const UseCallbackExample = () => {

  console.log('counter rendered')
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne, setCountOne]);
  const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo, setCountTwo]);

  return (
    <>
      {countOne} {countTwo}
      <Button handleClick={memoizedSetCountOne} name="button1" />
      <Button handleClick={memoizedSetCountTwo} name="button2" />
    </>
  )
}

export default UseCallbackExample;

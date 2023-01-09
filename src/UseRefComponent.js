import React, { useState, useRef, useEffect } from 'react';

const UseRefComponent = () => {
  const [name, setName] = useState('');
  const [counter, setCounter] = useState(0);

  const inputEl = useRef('');
  const prevCounterRef = useRef(0);

  const nameChangeHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const resetNameHandler = () => {
    setName('');
    inputEl.current.focus();
  };

  const counterHadler = () => {
    setCounter(Math.ceil(Math.random() * 100));
  };

  useEffect(() => {
    prevCounterRef.current = counter;
  }, [counter]);

  return (
    <div>
      <h3>use Ref to focus on input element</h3>
      <input
        ref={inputEl}
        placeholder='Name'
        value={name}
        onChange={nameChangeHandler}
      />
      <button onClick={resetNameHandler}>Reset</button>
      <h3>Use Ref to hold prev state</h3>
      <h4>Random Counter : {counter}</h4>
      {typeof prevCounterRef.current !== 'undefined' && (
        <h5>Previous Counter : {prevCounterRef.current}</h5>
      )}
      <button onClick={counterHadler}>Generate Number</button>
    </div>
  );
};

export default UseRefComponent;

import React, { useState } from 'react';
import './App.css';
import TodoFilter from './components/TodoFilter';
import UserFilter from './components/UserFilter';
import UseRefComponent from './UseRefComponent';

function App() {
  // console.log(useState(''));

  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
  const [initialValue, setInitialValue] = useState(() => {
    console.log('Run onces only!!');
    return 0; //0 is initial value
  }); // inthis way we can run useState only once at mounting the component

  const changeName = () => {
    console.log('clicked!!');
    setName('Sneha');
  };

  const addName = (e) => {
    e.preventDefault();
    setNames([...names, { id: name.length, name: name }]);
    console.log(names);
    setName('');
  };

  return (
    <div className='App'>
      <div>Hello, {name}</div>
      <button onClick={changeName}>Click Me!</button>
      <hr />
      <form onSubmit={addName}>
        <input
          placeholder='add Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <hr />
      {/* <UseRefComponent /> */}
      <div className='section'>
        <UserFilter />
        {/* <TodoFilter /> */}
      </div>
    </div>
  );
}

export default App;

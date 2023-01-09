import React, { useState, useEffect } from 'react';

const UserFilter = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState('');

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    setUsers(json);
  };

  // const renderUsers = users.map((user) => {
  //   return (
  //     <div key={user.id}>
  //       <p>
  //         <strong>{user.name}</strong>
  //       </p>
  //     </div>
  //   );
  // });

  const filterUsers = users
    .filter(({ name }) => {
      return name.indexOf(term) >= 0;
    })
    .map((user) => {
      return (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong>
          </p>
        </div>
      );
    });

  useEffect(() => {
    console.log('useEffect Run !!!');
    getUsers();
  }, []);

  return (
    <div>
      <h1>UserFilter Component</h1>
      <input
        placeholder='Search User'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>{filterUsers}</div>
    </div>
  );
};

export default UserFilter;

import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [enteredUser, setEnteredUser] = useState([]);

  const addUserHandler = (uName, uAge, uKey) => {
    setEnteredUser((prevUserList) => {
      return [...enteredUser, { name: uName, age: uAge, key: uKey }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={enteredUser} />
    </div>
  );
}

export default App;

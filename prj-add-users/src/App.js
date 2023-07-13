import React, { useState, Fragment } from 'react';
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
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={enteredUser} />
    </Fragment>
  );
}

export default App;

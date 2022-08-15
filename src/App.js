import React, {useState} from 'react';
import NewUser from './components/Users/AddNewUser';
import UserList from './components/Users/UsersList';


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uNAme, uAge) => {
    setUserList((prevUser) => {
      return [...prevUser, {id:Math.random().toString() ,name: uNAme, age: uAge}];
    });
  };

  return (
    <div>
      <NewUser onAdd = {addUserHandler}/>
      <UserList users={userList}/>
    </div>
  )
}

export default App;

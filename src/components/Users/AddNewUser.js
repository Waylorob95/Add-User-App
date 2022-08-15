import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddNewUser.module.css";
import ErrorModal from "../UI/ErrorModal";


const NewUser = (props) => {
  const [username, enteredUsername] = useState("");
  const [age, enteredAge] = useState("");
  const [error, setError] = useState();

  const addUser = (event) => {
    event.preventDefault();
    if(username.trim().length === 0 || age.trim().length === 0){
      setError({
        title:'Invalid input',
        message: 'Please enter valid input'
      })
        return;
    }
    if(+age < 1){
      setError({
        title:'Invalid input',
        message: 'Please enter valid input'
      })
        return;
    }

    props.onAdd(username, age);
    enteredAge("");
    enteredUsername("");
  };

  const usernameChange = (event) => {
    enteredUsername(event.target.value);
  };
  const ageChange = (event) => {
    enteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onApply={errorHandler}></ErrorModal>}
    <Card className={classes.input}>
      <form onSubmit={addUser}>
        <label htmlFor="uername">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameChange}
          placeholder="What is your username?"
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={ageChange}
          placeholder="How old are you?"
        ></input>
        <Button type="submit">Add new user</Button>
      </form>
    </Card>
    </div>
  );
};

export default NewUser;

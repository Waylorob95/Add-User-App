import React from "react";
import Card from "../UI/Card";
import calsses from './UsersList.module.css'

const UserList = props => {
    return (
        <Card className={calsses.users}>
        <ul>
            {props.users.map(user => (
                <li key={user.id}>
                    {user.name} : {user.age} years old
                </li>
            ))}
        </ul>
        </Card>
    );
};

export default UserList
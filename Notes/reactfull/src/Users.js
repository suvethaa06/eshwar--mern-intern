import React from "react";
import User from "./User";

const Users = ({theme}) => {
    return <div>
        <h1>Users</h1>
        <User Theme = {theme} />
    </div>;
};

export default Users;
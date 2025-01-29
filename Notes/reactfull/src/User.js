import React from'react';
import { useContext } from 'react';
import { themeContext } from './App';

const User = ({Theme}) => { const
    contextValue = useContext(themeContext);
    console.log(contextValue);
    return (
        <div style = {contextValue.style}>
            <h1>User Component</h1>
        </div>
    )
}

export default User;
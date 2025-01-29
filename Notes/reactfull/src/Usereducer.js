import React, {useState, useReducer} from "react";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
    STARTINGSTATE:"startingstate"
}
function reducerfunction(state, action) {
    switch(action.type) {
        case ACTIONS.INCREMENT:
            return {count:state.count+1}
        case ACTIONS.DECREMENT:
            return {count:state.count-1}
        case ACTIONS.RESET:
            return {count:0}
        case ACTIONS.STARTINGSTATE:
            return {count:55}
    }
}
export const Usereducer = () => {
    const [state, dispatch] = useReducer(reducerfunction, {count:55});
    function increment() {
        dispatch({type:ACTIONS.INCREMENT})
    }
    function decrement() {
        dispatch({type:ACTIONS.DECREMENT})
    }
    function reset() {
        dispatch({type:ACTIONS.RESET})
    }
    function startingstate() {
        dispatch({type:ACTIONS.STARTINGSTATE})
    }
    console.log(state)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={startingstate}>Starting State</button>
        </div>
    )
}


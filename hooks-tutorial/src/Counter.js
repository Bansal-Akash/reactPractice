import React from "react";
import { useReducer } from "react";

const Counter = () => {
    const initialValue = 0;
    const [count, dispatch] = useReducer(reducer, initialValue);

    function reducer(state, action) {
        switch(action) {
            case 'Add':
                return state+1;
            case 'Subtract':
                return state-1;
            default:
                return state;
        }
    }
    return (
        <>
        {count}
        <br/>
        <button onClick={() => dispatch('Add')}>Add</button>
        <br/>
        <button onClick={() => dispatch('Subtract')}>Subtract</button>
        </>
    )
}
export default Counter;
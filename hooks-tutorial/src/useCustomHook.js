import { useState } from "react";

function useCustomHook(initialValue = 0) {

    const[count, setCount] = useState(initialValue);

    const Decrement = () => {
        setCount((prevState) => prevState - 1);
    };
    
    const Increment = () => {
        setCount((prevState) => prevState + 1);
    };
    return [count, Increment, Decrement];
}
export default useCustomHook;
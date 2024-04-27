import "./App.css";
import { createContext, useCallback, useEffect, useState } from "react";
import MemoizationHooks from "./MemoizationHooks";
import ChildA from "./ChildA";
import Counter from "./Counter";
import useCustomHook from "./useCustomHook";

const data = createContext();
const data1 = createContext();
const data3 = createContext();

function App() {
  //const [count, setCount] = useState(0);
  const name = "Akash";
  const age = 26;
  const text = "This is the example of React Context Api and useContext hook.";

  //custom hook example
  const [count, Increment, Decrement] = useCustomHook();
  
  //useCallback example
  const helloHooks = useCallback(() => {
    // Any logic
  },[]);

  //passign data from child to parent example
  const dataFromChildToParent = (data) => {
    console.log(data, 'coming from CHILD');
  }

  //useEffect hook example
  useEffect(() => {
    console.log("Use Effect Call back function");

    return () => {
      console.log("Clean up code with useEffect");
    };
  }, []);

  return (
    <>
      <div className="App">
        <button onClick={Decrement}>-</button>
        {count}
        <button onClick={Increment}>+</button>
        <br />
      </div>
      <MemoizationHooks helloHooks={helloHooks}></MemoizationHooks>

      {/* Context api, useContext example */}
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <data3.Provider value={text}>
            <ChildA dataFromChildToParent={dataFromChildToParent}></ChildA>
          </data3.Provider>
        </data1.Provider>
      </data.Provider>
      <br/>
      <Counter></Counter>
    </>
  );
}

export {data};
export {data1};
export {data3};
export default App;


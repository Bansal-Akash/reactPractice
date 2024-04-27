import React, { useRef, useState } from "react";
import { useMemo } from "react";

const MemoizationHooks = ({helloHooks}) => {
  const [add, setAdd] = useState(0);
  const [subtract, setSubtract] = useState(100);
  const [name, setName] = useState("");
  const nameRef = useRef("");
  
  console.log('MemoizationHooks called');

  //useMemo example
  const Multiplication = useMemo(() => {
    console.log("Multiplication called");
    //'function is called even if we click on sbtract, but since this is only dependent on add then we should not call it again and again as it will give performance issues'
    //useMemo will call it only when add value is changed, till then it will take the cached value only
    return add * 2;
  }, [add]);

  //useRef example
  const handleNameChange = () => {
    nameRef.current.focus();
  }

  return (
    <>
      <p>{Multiplication}</p>
      <br />
      <button onClick={() => setAdd(add + 1)}>Add</button> {add}
      <br />
      <button onClick={() => setSubtract(subtract - 1)}>Subtract</button>{" "}
      {subtract}
      <br />
      <input type="text" value={name} ref={nameRef} onChange={(event) => setName(event.target.value)}></input>
      <button onClick={handleNameChange}>Click Me</button>
    </>
  );
};

export default React.memo(MemoizationHooks);

import ChildB from './ChildB';
import React from "react";

const ChildA = (props) => {

    const passDataToParent = () => {
        props.dataFromChildToParent('Hello');
    }

    return (
        <>
        <br/>
        <button onClick={passDataToParent}>Lifting state up</button>
        <ChildB></ChildB>
        </>
    )
}

export default ChildA;
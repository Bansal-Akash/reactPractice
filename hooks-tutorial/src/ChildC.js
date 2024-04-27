import React, { useContext } from "react";
import { data, data1, data3 } from './App';

const ChildC = () => {
    const text = useContext(data3);
    return (
        <>
            <data.Consumer>
                {
                    (name) => {
                        return (
                          <data1.Consumer>
                            {
                                (age) => {
                                    return (
                                        <p>
                                        My name is {name} and my age is {age}. {text}
                                        </p>
                                    );
                                }
                            }
                          </data1.Consumer>
                        );
                    }
                }
            </data.Consumer>
        </>
    )
}

export default ChildC;
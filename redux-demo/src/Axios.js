import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setUser((prevState) => {
                prevState = response.data;
                return prevState;
            });
        });

        //axios.post('url', dataToSend);
        //axios.put('url', dataToUpdate);
        //axios.delete('url');
    }, []);
  return (
        <>
            {user.map((data) => {
                return (<div key={data.id}>{data.name}</div>)
            })}
        </>
  )
}

export default Axios;
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
   const navigate = useNavigate();
   const contact = 100900900;

   const handleUseNavigate = () => {
        // on click of button we will navigate to contact page using useNavigate hook.
        navigate('/contact', {state: {number: contact}});
   } 
  return (
    <>
      <div>About</div>
      <div>
        <p>
          Click this button to navigate to contact page using useNavigate hook.
        </p>
        <button onClick={handleUseNavigate}>Use Navigate</button>
      </div>
    </>
  );
}

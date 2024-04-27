import './App.css';
import { useState } from 'react';

function App(props) {
  const [userName, setUserName] = useState('');
  const [text, setText] = useState('');

  function showText(e) {
    setText('Hi testing');
  }
  return (
    <div className="App">
      <p>First react test case</p> <br/>
      <label htmlFor='name'>User Name</label>
      <input type='text' placeholder='user name' name='user' id='name' value={userName} onChange={(e)=> setUserName(e.target.value)}></input> <br/><br/>
      <img title='hd wallpaper' style={{'width':'100px'}} src={'https://www.hdwallpapers.in/brava_solis_grim_sens_azami_thorn_osa_thunderbird_4k_hd_tom_clancys_rainbow_six_siege-wallpapers.html'}></img>
      <br/>
      {text}
      <br/>
      <button data-testid='testId' onClick={showText}>Click Me</button>
      <br/>
      <label htmlFor='age'>User Age</label>
      <input type='text' id='age'></input>
      <button onClick={props.testFunction}>Functional props</button>
    </div>
  );
}

export default App;

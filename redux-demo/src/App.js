import './App.css';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from './BookContainer';
import Axios from './Axios';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer></BookContainer>
      </div>
      <div><Axios></Axios></div>
    </Provider>
  );
}

export default App;

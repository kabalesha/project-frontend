// import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import './App.css';
import Modal from './components/modalWindow/Modal';
// import Header from './components/header/Header';
import HomePage from './components/pages/homePage/HomePage';
// import SignUpPage from './components/pages/SignUp/SignUpPage.jsx';
function App() {
  const dispath = useDispatch();
  const addPortionWater = () => {};
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header /> */}
      <HomePage />

      {/* <SignUpPage /> */}
    </div>
  );
}

export default App;

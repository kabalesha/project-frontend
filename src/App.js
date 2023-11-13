import logo from './logo.svg';
import './App.css';
import MainPage from '../src/components/pages/MainPage';
import SignUpPage from './components/pages/SignUp/SignUpPage.jsx';
function App() {
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
      {/* <MainPage /> */}
      <SignUpPage/>
    </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import MainPage from './components/pages/homePage/HomePage.jsx';
// import Login from '../pages/Login';
import SignUpPage from './components/pages/SignUp/SignUpPage.jsx';
import Main from './components/main/Main.jsx';
import Header from './components/header/Header';
import './App.css';
// import HomePage from './components/pages/homePage/HomePage';

// function App() {
//   return (
//     <div className="App">
//       {/* <Header /> */}
//       <HomePage />

//       {/* <SignUpPage /> */}
//     </div>
//   );
// }

const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/Main" />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

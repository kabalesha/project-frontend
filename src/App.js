import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './components/pages/MainPage.jsx';
// import Login from '../pages/Login';
import SignUpPage from './components/pages/SignUp/SignUpPage.jsx'
// import Main from './components/main/Main.jsx';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        {/* <Route path="/Main" element={<Main />} /> */}
        <Route index element={<Navigate to="/MainPage" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
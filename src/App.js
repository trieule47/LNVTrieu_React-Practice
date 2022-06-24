import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
// import { GlobalActions } from './redux/rootActions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import AuthRoute from './components/AuthRoute';
import PrivateRoute from './components/PrivateRoute';
import Customers from './pages/Customers';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact path='/'
          element={
            <Customers/>
          } />
        <Route
          exact path='/login'
          element={
            <AuthRoute>
              <Login/>
            </AuthRoute>}
        />
        <Route
          path='/carts'
          element={
            <PrivateRoute>
              detail
            </PrivateRoute>}
        />
        <Route
          path='/detail'
          element={
            <PrivateRoute>

            </PrivateRoute>}
        />
        <Route
          path='*'
          element={<div>nothing here</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

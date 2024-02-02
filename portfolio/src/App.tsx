import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import Header from './components/global/Header';

// TODO REMOVAL
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
          <AppRoutes />
        </BrowserRouter>
  );
}

export default App;

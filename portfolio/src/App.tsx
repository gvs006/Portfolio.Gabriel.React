import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
function App() {
  return (
    <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import Projects from '../Projects/Project';
import Header from '../Header/Header';

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Dashboard />
  },
  {
    path: "/portfolio/about",
    element: <About />
  },
  {
    path: "/portfolio/projects",
    element: <Projects />
  }
])

function App() {
  return <div className='App'>
    <Header />
    <RouterProvider router={router} />
  </div>
}

export default App;
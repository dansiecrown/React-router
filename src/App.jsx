import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import './layout.css';
import AppRouter from './routes';

const CustomNavLink = ({ to, ...props }) => {
  return (
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? 'red' : 'black',
      })}
      to={to}
      {...props}
    ></NavLink>
  );
};

function Layout() {
  return (
    <nav>
      <h1 className="logo">Welcome to our Router Test App</h1>
      <CustomNavLink to="/">Home</CustomNavLink>|{' '}
      <CustomNavLink to="/about">About</CustomNavLink>|{' '}
      <CustomNavLink to="/items">Items</CustomNavLink>|{' '}
      <CustomNavLink to="/items/new">New Item</CustomNavLink>|{' '}
    </nav>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      {/* layout */}
      <Layout />

      {/* routes in our App */}
      <AppRouter />
    </div>
  );
}

export default App;

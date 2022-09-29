import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import Counter from './components/Counter';

import CounterTimer from './components/CounterTimer';

import BeerList from './components/BeerList';

import LaunchList from './components/LaunchList';

import CountriesList from './components/CountriesList';

import CountryPage from './components/CountryPage';

import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';

function App() {

  const [myValue, setMyValue] = useState(7)

  return (
    <div className="App">
      <nav style={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/" >Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/counter" >Counter</NavLink>
        <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/timer" >CounterTimer</NavLink>
        <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/beer-list">Beer List</NavLink>
        <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/launch-list">Launch List</NavLink>
        <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/go-away">Do Not Click</NavLink>
        <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/countries-list">Countries List</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<h1>hello from home page</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/timer" element={<CounterTimer />} />
        <Route path="/beer-list" element={<BeerList myValue={myValue} setMyValue={setMyValue}/>} />
        <Route path="/launch-list" element={<LaunchList />} />
        <Route path="/go-away" element={<Navigate to="/counter" />} />
        <Route path="/countries-list" element={<CountriesList />} />
        <Route path="/countries/:countryCode" element={<CountryPage />} />
        <Route path="*" element={<h1>Try Again Loser</h1>} />
      </Routes>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

import CounterTimer from './components/CounterTimer';

import BeerList from './components/BeerList';

import LaunchList from './components/LaunchList';

function App() {
  return (
    <div className="App">
      <h1>hey</h1>
      <Counter />
      <CounterTimer />
      <BeerList />
      <LaunchList />
    </div>
  );
}

export default App;

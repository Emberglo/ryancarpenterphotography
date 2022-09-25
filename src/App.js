import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Fragment>
      <Header />

      <HomePage />
    </Fragment>
  );
}

export default App;

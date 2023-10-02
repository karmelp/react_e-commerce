import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Routes from './Routes.js';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;

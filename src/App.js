import Home from './components/Home';
import Search from './components/Search';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Tacos from './components/Tacos';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Venta de productos</h1>

        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search'>search</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/tacos/:name' element={<Tacos />} />
      </Routes>
    </div>
  );
}

export default App;

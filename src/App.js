import Home from './components/Home';
import Search from './components/Search';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Tacos from './components/Tacos';
import TacosDetail from './components/TacosDetail';
import TacosIndex from './components/TacosIndex';

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
        <Route path='/tacos/:name' element={<Tacos />}>
          <Route index element={<TacosIndex />} />
          <Route path='details' element={<TacosDetail />} />
        </Route>
        <Route path='*' element={<h1>No entontrado 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;

import Home from './components/Home';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      Venta de productos
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

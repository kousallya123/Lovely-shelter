import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Hotels from './Pages/Hotels/Hotels';
import Search from './Pages/Search/Search';
import SerachItem from './Components/SearchItem/SerachItem';
import Single from './Components/Single/Single';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<Hotels/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/item' element={<SerachItem/>} />
        <Route path='/single' element={<Single/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

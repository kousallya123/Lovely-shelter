import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Hotels from './Pages/Hotels/Hotels';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<Hotels/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

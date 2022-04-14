import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from 'views/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/today" element={<Home/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

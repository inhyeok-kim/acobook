import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from 'views/Home.js';
import Today from 'views/Today';
import MenuBar from 'components/MenuBar';

//style
import style from 'css/module/App.module.css';
//style


function App() {

  return (
    <div id="app" className={style.app}>
      <BrowserRouter>
      
        <section className={style.main}>
            <Routes>
              <Route path="/today" element={<Today/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
        </section>

        <footer>
          <MenuBar />
        </footer>


      </BrowserRouter>
    </div>
  );
}

export default App;

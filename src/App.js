import { useState } from 'react';

import Home from 'views/Home.js';
import Today from 'views/Today';
import Balance from 'views/Balance';
import Budget from 'views/Budget';

import MenuBar from 'components/MenuBar';
//style
import style from 'css/module/App.module.css';
//style


function App() {
  const [menu, setMenu] = useState("today");
  function renderMenu(){
    switch (menu) {
      case "home":
        return (<Home />)
      case "today":
        return (<Today />)
      case "balance":
        return (<Balance />)
      case "budget":
        return (<Budget />)
      default:
        return (<Home />)
    }
    
  }

  return (
    <div id="app" className={style.app}>
      
        <section className={style.main}>
            {renderMenu()}
        </section>

        <footer>
          <MenuBar menu={menu} setMenu={ (m)=>{setMenu(m)} } />
        </footer>

    </div>
  );
}

export default App;

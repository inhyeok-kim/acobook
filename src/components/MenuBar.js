import { NavLink } from 'react-router-dom';
// style
import style from 'css/module/MenuBar.module.css';
// style

function MenuBar(){

    return (
        <div className={ style.menu_bar}>
            <ul>
                <li>
                    <NavLink className={({ isActive })=> isActive ? style.active : '' } to="/today">오늘</NavLink>
                </li>
                <li>
                    <NavLink to="/balance">잔액</NavLink>
                </li>
            </ul>
        </div>
    )
};


export default MenuBar;
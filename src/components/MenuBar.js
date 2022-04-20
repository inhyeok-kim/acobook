// style
import style from 'css/module/MenuBar.module.css';
// style

function MenuBar({
    setMenu,
    menu
}){
    function menuActive(m){
        if(menu === m){
            return style.active;
        }
        return "";
    }
    function goMenu(m){
        setMenu(m);
    }

    return (
        <div className={ style.menu_bar}>
            <ul>
                <li>
                    <button className={menuActive("today")} onClick={()=>{goMenu("today")}} >오늘</button>
                </li>
                <li>
                    <button className={menuActive("balance")} onClick={()=>{goMenu("balance")}}>잔액</button>
                </li>
            </ul>
        </div>
    )
};


export default MenuBar;
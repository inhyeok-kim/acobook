import style from 'css/module/Balance.module.css';

import List from 'components/List';

function Balance(){

    return (
        <div className={style.balance} >
            <header className={style.header} >
                <div className={style.total}>
                    <span>총자산</span>
                    <span><span>&#8361; </span>3,253,070</span>
                </div>
            </header>
            <section className={style.body}>
                <div>
                    <h4 style={{marginBottom:"5px", paddingLeft:"25px",color:"grey", width:"50%",display:"inline-block"}}>예정</h4>
                    <h4 style={{marginBottom:"5px", paddingRight:"25px",color:"grey", width:"50%",textAlign:"right", display:"inline-block"}}>- &#8361;60,000</h4>
                    <List></List>
                </div>
                <div>
                    <h4 style={{marginBottom:"5px", paddingLeft:"25px",color:"grey", width:"50%",display:"inline-block"}}>오늘</h4>
                    <h4 style={{marginBottom:"5px", paddingRight:"25px",color:"grey", width:"50%",textAlign:"right", display:"inline-block"}}>- &#8361;60,000</h4>
                    <List></List>
                </div>
                
            </section>
        </div>
    )
}

export default Balance;
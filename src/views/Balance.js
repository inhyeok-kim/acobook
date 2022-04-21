import style from 'css/module/Balance.module.css';

import BalanceList from 'components/BalanceList';

function Balance(){

    return (
        <div className={style.balance} >
            <header className={style.header} >
                <div className={style.head}>
                    <button>
                        
                    </button>
                    <span>잔액</span>
                    <button>
                        수정
                    </button>
                </div>
                <div className={style.total}>
                    <span>총자산</span>
                    <span><span>&#8361; </span>3,253,070</span>
                </div>
                <div className={style.asset}>
                    <span><span>&#8361; </span>4,253,070</span>
                </div>
                <div className={style.debt}>
                    <span><span>&#8361; </span>1,000,000</span>
                </div>
            </header>
            <section className={style.body}>
                <div>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingLeft:"25px",color:"grey", width:"50%",display:"inline-block"}}>계정</h5>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingRight:"25px",color:"grey", width:"50%",textAlign:"right", display:"inline-block"}}>&#8361; 60,000</h5>
                    <BalanceList type={'asset'} ></BalanceList>
                </div>
                <div>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingLeft:"25px",color:"grey", width:"50%",display:"inline-block"}}>부채</h5>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingRight:"25px",color:"grey", width:"50%",textAlign:"right", display:"inline-block"}}>&#8361; 60,000</h5>
                    <BalanceList type={'debt'}></BalanceList>
                </div>
                <div>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingLeft:"25px",color:"grey", width:"50%",display:"inline-block"}}>신용카드</h5>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingRight:"25px",color:"grey", width:"50%",textAlign:"right", display:"inline-block"}}>&#8361; 60,000</h5>
                    <BalanceList type={'debt'}></BalanceList>
                </div>
                <div>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingLeft:"25px",color:"grey", width:"50%",display:"inline-block"}}>기타자산</h5>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingRight:"25px",color:"grey", width:"50%",textAlign:"right", display:"inline-block"}}>&#8361; 60,000</h5>
                    <BalanceList type={'asset'}></BalanceList>
                </div>
                
            </section>
        </div>
    )
}

export default Balance;
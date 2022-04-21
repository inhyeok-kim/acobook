import style from 'css/module/Today.module.css';

import HistoryList from 'components/HistoryList';

function Today(){
    return (
        <div className={style.today} >
            <header className={style.header} >
                <div className={style.date} >
                    <span>2022년 4월 15일 (금)</span>
                </div>
                <article className={style.total}>
                    <div>
                        지출
                        <br/>
                        <span>20,000</span>
                    </div>
                    <div>
                        수익
                        <br/>
                        <span>20,000</span>
                    </div>
                </article>
            </header>
            <section className={style.body}>
                <div>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingLeft:"25px",color:"grey", width:"50%",display:"inline-block"}}>예정</h5>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingRight:"25px",color:"grey", width:"50%",textAlign:"right", display:"inline-block"}}>- &#8361; 60,000</h5>
                    <HistoryList></HistoryList>
                </div>
                <div>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingLeft:"25px",color:"grey", width:"50%",display:"inline-block"}}>오늘</h5>
                    <h5 style={{marginTop : "10px", marginBottom:"5px", paddingRight:"25px",color:"grey", width:"50%",textAlign:"right", display:"inline-block"}}>- &#8361; 60,000</h5>
                    <HistoryList></HistoryList>
                </div>
                
            </section>
        </div>
    )
}

export default Today;
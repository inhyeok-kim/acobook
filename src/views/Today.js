import style from 'css/module/Today.module.css';

function Today(){
    return (
        <div className={style.today} >
            <header className={style.header} >
                <div className={style.left} >
                    <span>금요일</span>
                    <span>2022년 4월</span>
                </div>
                <div className={style.right} >
                    <h1>15</h1>
                </div>
            </header>
            <section className={style.body}>
                
            </section>
        </div>
    )
}

export default Today;
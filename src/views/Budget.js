import style from 'css/module/budget.module.css';


function Budget(){


    return (
        <div className={style.today} >
            <header className={style.header} >
                <button>
                    
                </button>
                <span>2022년 4월</span>
                <button>
                    수정
                </button>
            </header>
            <section className={style.body}>
                <article className={style.total}>
                    <div className={style.budgetBox}>
                        &#8361; 1,124,000
                    </div>
                    <div className={style.expenseBox}>
                        &#8361; 230,000
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Budget;
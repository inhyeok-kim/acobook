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
                <article className={style.budgetList}>
                    <div className={style.budgetItem}>
                        <div className={style.budgetIcon}>
                        </div>
                        <span className={style.budgetName}>예산명</span>
                        <span className={style.budgetExpense}>250,000</span>
                        <span className={style.budgetPrice}>300,300</span>
                    </div>
                    <div className={style.budgetItem}>
                        <div className={style.budgetIcon}></div>
                        <span className={style.budgetName}>예산명</span>
                        <span className={style.budgetExpense}>250,000</span>
                        <span className={style.budgetPrice}>1,300,300</span>
                    </div>
                    <div className={style.budgetItem}>
                        <div className={style.budgetIcon}></div>
                        <span className={style.budgetName}>예산명</span>
                        <span className={style.budgetExpense}>250,000</span>
                        <span className={style.budgetPrice}>300,300</span>
                    </div>
                    <div className={style.budgetItem}>
                        <div className={style.budgetIcon}></div>
                        <span className={style.budgetName}>예산명</span>
                        <span className={style.budgetExpense}>250,000</span>
                        <span className={style.budgetPrice}>300,300</span>
                    </div>
                    <div className={style.budgetItem}>
                        <div className={style.budgetIcon}></div>
                        <span className={style.budgetName}>예산명</span>
                        <span className={style.budgetExpense}>250,000</span>
                        <span className={style.budgetPrice}>300,300</span>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Budget;
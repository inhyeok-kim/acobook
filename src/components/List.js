import style from 'css/module/List.module.css';

function List({}){

    return (
        <ul className={style.ul}>
            <li className={style.li}>
                <div>
                    <span>식비</span>
                    <span>4월18</span>
                </div>
                <div>
                    <span className={style.expense}>&#8361;5,000</span>
                </div>
            </li>

            <li className={style.li}>
                <div>
                    <span>교통비</span>
                    <span>4월18</span>
                </div>
                <div>
                    <span className={style.expense}>&#8361;50,000</span>
                </div>
            </li>
            <li className={style.li}>
                <div>
                    <span>정산</span>
                    <span>4월18</span>
                </div>
                <div>
                    <span className={style.income}>&#8361;5,000</span>
                </div>
            </li>
            <li className={style.li}>
                <div>
                    <span>식비</span>
                    <span>4월18</span>
                </div>
                <div>
                    <span className={style.expense}>&#8361;5,000</span>
                </div>
            </li>
            <li className={style.li}>
                <div>
                    <span>식비</span>
                    <span>4월18</span>
                </div>
                <div>
                    <span className={style.expense}>&#8361;5,000</span>
                </div>
            </li>

        </ul>
    )
}

export default List;
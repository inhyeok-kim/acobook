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
                    <span>5,000</span>
                </div>
            </li>

            <li className={style.li}>
                <div>
                    <span>교통비</span>
                    <span>4월18</span>
                </div>
                <div>
                    <span>5,000</span>
                </div>
            </li>
            <li className={style.li}>
                <div>
                    <span>식비</span>
                    <span>4월18</span>
                </div>
                <div>
                    <span>5,000</span>
                </div>
            </li>
            <li className={style.li}>
                <div>
                    <span>식비</span>
                    <span>4월18</span>
                </div>
                <div>
                    <span>5,000</span>
                </div>
            </li>
            <li className={style.li}>
                <div>
                    <span>식비</span>
                    <span>4월18</span>
                </div>
                <div>
                    <span>5,000</span>
                </div>
            </li>

        </ul>
    )
}

export default List;
import style from 'css/module/List.module.css';

function BalanceList({
    type,
    modify
}){

    return (
        <ul className={style.ul}>
            <li className={style.li}>
                {modify ? <button><span></span></button> : ''}
                <div>
                    <span>국민은행</span>
                    <span className={style[type]}>&#8361; 5,000</span>
                </div>
            </li>

            <li className={style.li}>
                {modify ? <button><span></span></button> : ''}
                <div>
                    <span>지역화폐</span>
                    <span className={style[type]}>&#8361; 50,000</span>
                </div>
            </li>
            <li className={style.li}>
                {modify ? <button><span></span></button> : ''}
                <div>
                    <span>캐캐오페이</span>
                    <span className={style[type]}>&#8361; 5,000</span>
                </div>
            </li>

        </ul>
    )
}

export default BalanceList;
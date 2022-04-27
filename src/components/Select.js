import style from 'css/module/Select.module.css';

function Select({
    select
}){
    
    function touched(e){
        console.log(e.nativeEvent);
    }
    return (
        <div className={style.wrapper}>
            <div className={style.selectBox}>
                <ul>
                    <li onTouchStart={touched}>삭제</li>
                    <li onTouchStart={touched}>추가</li>
                    <li onTouchStart={touched}>수정</li>
                </ul>
            </div>
            <div className={style.cancel}>취소</div>
        </div>
    )
}

export default Select;
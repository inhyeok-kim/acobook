import style from 'css/module/Select.module.css';

function Select({
    select, open, openTrigger
}){
    return (
        <div className={style.wrapper} style={open ? {bottom:'5%'}:{top:'100%'}}>
            <div className={style.selectBox}>
                <ul>
                    <li >삭제</li>
                    <li >추가</li>
                    <li >수정</li>
                </ul>
            </div>
            <div 
                className={style.cancel}
                onClick={()=>{openTrigger(false)}}
            >취소</div>
        </div>
    )
}

export default Select;
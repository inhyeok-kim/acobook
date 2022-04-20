import { useSelector, useDispatch } from "react-redux";
import { UserInfoDispatch } from 'redux/reducers/UserInfo';

function Home(){

    const name = useSelector((state)=>state.UserInfo.name);

    const dispatch = useDispatch();
    function onChange(e){
        dispatch(UserInfoDispatch.setName(e.target.value));
    }

    return (
        <div>
            {name}
            <input type="text" onChange={onChange} />
        </div>
    )
}

export default Home;
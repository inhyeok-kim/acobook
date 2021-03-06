const SET_NAME = 'UserInfo/SET_NAME';

function UserInfo(currState, action ){
    if(currState === undefined){
        return { 
            name : 'default'
        }
    }    
    const userInfo = {...currState};
    if(action.type === SET_NAME){
        userInfo.name = action.value;
    }
    return userInfo;
}
export default UserInfo;

export const UserInfoDispatch = {
    setName : function(name){
        return {type : SET_NAME, value : name};
    }
}

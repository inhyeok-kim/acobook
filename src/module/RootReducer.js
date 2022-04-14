import { combineReducers} from 'redux';
import Home from 'views/Home';
import Today from 'views/Today';

const rootReducer = combineReducers({Home, Today});

export default rootReducer;
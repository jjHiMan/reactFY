import {
    combineReducers
} from 'redux';
import theatre from "./theatre";
import homeHotShow from "./homeHotShow";
export default combineReducers({
    theatre,
    homeHotShow
})
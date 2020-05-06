import {
    combineReducers
} from 'redux';
import theatre from "./theatre";
import home from "./home";
import showDetails from "./showDetails";
export default combineReducers({
    theatre,
    home,
    showDetails
})
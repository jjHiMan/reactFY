import {
    combineReducers
} from 'redux';
import theatre from "./theatre";
import home from "./home";
import showDetails from "./showDetails";
import designs from "./designs";
export default combineReducers({
    theatre,
    home,
    showDetails,
    designs
})
import { combineReducers } from 'redux';
import authreducers from './authreducers';


export default combineReducers({
    auth: authreducers
});
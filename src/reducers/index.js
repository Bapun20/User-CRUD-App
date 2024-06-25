// src/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import editUserReducer from './editUserReducer';

const rootReducer = combineReducers({
    users: userReducer,
    editUser: editUserReducer
});

export default rootReducer;

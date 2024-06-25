// src/reducers/editUserReducer.js
const initialState = {
    editingUser: null
};

const editUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EDIT_USER':
            return {
                ...state,
                editingUser: action.payload
            };
        case 'CLEAR_EDIT_USER':
            return {
                ...state,
                editingUser: null
            };
        default:
            return state;
    }
};

export default editUserReducer;

// src/reducers/userReducer.js
const initialState = {
  users: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_USER':
          return {
              ...state,
              users: [...state.users, action.payload]
          };
      case 'DELETE_USER':
          return {
              ...state,
              users: state.users.filter(user => user.id !== action.payload)
          };
      case 'EDIT_USER':
          return {
              ...state,
              users: state.users.map(user => 
                  user.id === action.payload.id ? action.payload : user
              )
          };
      default:
          return state;
  }
};

export default userReducer;

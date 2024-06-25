// src/actions/userActions.js
export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: user
});

export const deleteUser = (userId) => ({
  type: 'DELETE_USER',
  payload: userId
});

export const editUser = (user) => ({
  type: 'EDIT_USER',
  payload: user
});

export const setEditUser = (user) => ({
  type: 'SET_EDIT_USER',
  payload: user
});

export const clearEditUser = () => ({
  type: 'CLEAR_EDIT_USER'
});

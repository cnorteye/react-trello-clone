import { CONSTANTS } from "../actions";
import { v4 as uuidv4 } from 'uuid';

export const setActiveBoard = id => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: id
  };
};

export const addBoard = title => {
  const id = uuidv4();
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: { title, id }
  };
};

// unsure if i need this: I want to be able to edit the boards after it has been created and also to delete it
/*
export const editBoard = title => {
    const id = uuidv4();
    return {
      type: CONSTANTS.EDIT_BOARD,
      payload: { title, id }
    };
  };

  export const deleteBoard = title => {
    const id = uuidv4();
    return {
      type: CONSTANTS.DELETE_BOARD,
      payload: { title, id }
    };
  };
  */
  
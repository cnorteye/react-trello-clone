import { CONSTANTS } from "../actions";

const initialState = {
    "board-0": {
    text: "myboard",
    id: `board-0`,
  }
};

const activeBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_ACTIVE_BOARD: {
      return action.payload;
    }
{
    /*
        case CONSTANTS.EDIT_BOARD: {
        const { id, newText } = action.payload;
        const board = state[id];
        board.text = newText;
        return { ...state, [`board-${id}`]: board }
        }
  
      case CONSTANTS.DELETE_BOARD: {
        const { id } = action.payload;
        const newState = state;
        delete newState[id];
        return newState;
      }
    */
   }

    default:
      return state;
  }


};

export default activeBoardReducer;
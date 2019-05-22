import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { Type } from 'app/actions';

const initialState: RootState.UserState = {
  users: [],
  selectedUserId: -1
};

export const usersReducer = handleActions<RootState.UserState, any>(
  {
    [Type.GET_LIST_OF_USERS]: (state, action) => {
      return {
        ...state,
        users: action.payload
      }
    },
    [Type.ADD_USER]: (state, action) => {
      if (action.payload && action.payload.name) {
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      }
      return state;
    },
    [Type.SELECT_USER]: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          selectedUserId: action.payload,
        };
      }
      return state;
    },
    [Type.ADD_HOBBIES]: (state, action) => {
      const newState = {
        ...state,
        users: [...state.users]
      };

      const user = newState.users.find(user => user.id === action.payload.userId);

      if (user) {
        user.hobbies = [...user.hobbies, action.payload.hobby];
      }

      return newState;
    }
  },
  initialState
);

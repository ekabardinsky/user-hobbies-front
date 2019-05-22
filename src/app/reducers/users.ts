import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { Type } from 'app/actions';

const initialState: RootState.UserState = {
  users: [],
  selectedUserId: -1 // fixme
};

export const usersReducer = handleActions<RootState.UserState, any>(
  {
    [Type.GET_LIST_OF_USERS]: (state, action) => {
      console.log('GET_LIST_OF_USERS reducer action=')
      console.log(action)
      return {
        ...state,
        users: action.payload
      }
    },
    [Type.ADD_USER]: (state, action) => {
      console.log('ADD_USER reducer action=')
      console.log(action)
      if (action.payload && action.payload.name) {
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      }
      return state;
    },
    [Type.SELECT_USER]: (state, action) => {
      console.log('SELECT_USER reducer action=')
      console.log(action)
      if (action.payload && action.payload.id) {
        return {
          ...state,
          selectedUserId: action.payload.id,
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

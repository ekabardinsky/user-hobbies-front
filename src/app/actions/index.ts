import { createAction } from 'redux-actions';
import { Hobbie, User } from 'app/models';

export enum Type {
  ADD_USER = 'ADD_USER',
  GET_LIST_OF_USERS = 'GET_LIST_OF_USERS',
  ADD_HOBBIES = 'ADD_HOBBIES',
  GET_USER_HOBBIES = 'GET_USER_HOBBIES',
  DELETE_USER_HOBBIES = 'DELETE_USER_HOBBIES'
}

export const addUser = createAction<User>(Type.ADD_USER);
export const getListOfUsers = createAction<User[]>(Type.GET_LIST_OF_USERS);
export const addHobbies = createAction<AddHobbiesPayload>(Type.ADD_HOBBIES);
export const getListOfUserHobbies = createAction<Hobbie[]>(Type.GET_USER_HOBBIES);
export const deleteUsersHobbies = createAction<boolean>(Type.DELETE_USER_HOBBIES);

export interface AddHobbiesPayload {userId: number, hobbie: Hobbie};

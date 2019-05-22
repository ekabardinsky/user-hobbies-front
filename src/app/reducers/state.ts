import { User } from 'app/models';

export interface RootState {
  users: User;
  router?: any;
}

export namespace RootState {
  export type UserState = {
    users: User[],
    selectedUserId: number
  };
}

import * as React from 'react';
import * as style from './style.scss';
import AddUserComponent from 'app/components/AddUser/AddUser';
import { User } from 'app/models';
import UserComponent from 'app/components/User/User';

interface Props {
  users: User[]
}

interface State {
  // TODO: connect with store: get users and selected user id. Then get user's hobbies
}


export default class UsersContainer extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }


  render() {
    return (
      <div className={style.UsersContainer}>
        <AddUserComponent/>
        {this.props.users.map((user: User) => {
          return <UserComponent key={user.id} user={user}/>;
        })}
      </div>
    );
  }
}

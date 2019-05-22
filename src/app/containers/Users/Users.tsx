import * as React from 'react';
import * as style from './style.scss';
import AddUserComponent from 'app/components/AddUser/AddUser';
import { User } from 'app/models';
import UserComponent from 'app/components/User/User';
import { connect } from 'react-redux';

@connect(
  (state) => {
    return { users: state.userState.users };
  }
)
export default class UsersContainer extends React.Component<any, any> {
  constructor(props: any, context?: any) {
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

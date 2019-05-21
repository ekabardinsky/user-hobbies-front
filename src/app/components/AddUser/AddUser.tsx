import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addUser, getListOfUsers } from 'app/actions';
import { addUserCall } from 'app/utils/apiHelper';

interface Props {
}

interface State {
  newUserName: string
}

@connect(
  (state) => {
    return { users: state.userState.users };
  },
  (dispatch: Dispatch) => ({
    addUser: bindActionCreators(addUser, dispatch),
    getListOfUsers: bindActionCreators(getListOfUsers, dispatch)
  })
)
export default class AddUserComponent extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
    (async () => await this.getUserList())();
  }

  getUserList = async () => {
    const response = await fetch('/api/users', {
      method: 'GET'
    });

    const body = (await response.json());
    getListOfUsers(body);
  };

  addUserHandler = async () => {
    const user = { name: this.state.newUserName } as any;
    addUserCall(user, this.getUserList);
  };

  newUserNameChangeHandler = (event: any) => {
    this.setState({ newUserName: event.target.value });
  };

  render() {
    return (
      <div className={style.AddUserBlock}>
        <input className={style.Input} placeholder={'Enter user name'} onChange={this.newUserNameChangeHandler}/>
        <button className={style.ButtonAddUser} onClick={this.addUserHandler}>Add</button>
      </div>
    );
  }
}

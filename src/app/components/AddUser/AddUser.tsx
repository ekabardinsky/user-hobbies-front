import * as React from 'react';
import * as style from './style.scss';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addUser, getListOfUsers } from 'app/actions';
import { addUserCall, getUserListCall } from 'app/utils/apiHelper';

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
export default class AddUserComponent extends React.Component<any, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
    (async () => await this.getUserList())();
  }

  getUserList = async () => {
    await getUserListCall(this.props.getListOfUsers);
  };

  addUserHandler = async () => {
    const user = { name: this.state.newUserName } as any;
    await addUserCall(user, this.getUserList);
  };

  newUserNameChangeHandler = (event: any) => {
    this.setState({ newUserName: event.target.value });
  };

  render() {
    const isAddEnabled = this.state && this.state.newUserName;

    return (
      <div className={style.AddUserBlock}>
        <input className={style.InputUserName} placeholder={'Enter user name'} onChange={this.newUserNameChangeHandler}/>
        <button disabled={!isAddEnabled} className={style.ButtonAddUser} onClick={this.addUserHandler}>Add</button>
      </div>
    );
  }
}

import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addUser, getListOfUsers } from 'app/actions';
import { User } from 'app/models';

import UserComponent from './../../components/User/User';
import HobbyComponent from '../../components/Hobby/Hobby';
import AddUserComponent from '../../components/AddUser/AddUser';
import AddHobbyComponent from '../../components/AddHobby/AddHobby';

interface Props {
  users: User[],
  addUser: Function,
  getListOfUsers: Function
}

interface State {
  newUserName: string
}

@connect(
  (state, ownProps) => {
    return { users: state.userState.users };
  },
  (dispatch: Dispatch) => ({
    addUser: bindActionCreators(addUser, dispatch),
    getListOfUsers: bindActionCreators(getListOfUsers, dispatch)
  })
)
export class App extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
    (async () => await this.getUserList())();
  }

  getUserList = async () => {
    const response = await fetch('/api/users', {
      method: 'GET'
    });

    const body = (await response.json());
    this.props.getListOfUsers(body);
  };

  render() {
    const users = this.props.users ? this.props.users : [];
    const hobbiesForTest = [
      { id: '', passionLevel: 'High', name: 'Fishing', year: 2014 },
      { id: '', passionLevel: 'High', name: 'Fishing', year: 2014 },
      { id: '', passionLevel: 'High', name: 'Fishing', year: 2014 },
      { id: '', passionLevel: 'High', name: 'Fishing', year: 2014 },
      { id: '', passionLevel: 'High', name: 'Fishing', year: 2014 },
      { id: '', passionLevel: 'High', name: 'Fishing', year: 2014 }
    ];
    return (
      <div className={style.MainContainer}>
        <div className={style.ContentWrapper}>
          <div className={style.Header}>User Hobbies</div>
          <div className={style.MainContent}>
            <div className={style.UsersBlock}>
              < AddUserComponent/>
              {users.map((user: User) => {
                return <UserComponent key={user.id} user={user}/>;
              })}
            </div>
            <div className={style.HobbiesBlock}>
              <AddHobbyComponent/>
              {hobbiesForTest.map((hobby: any) => {
                return <HobbyComponent key={hobby.id} hobby={hobby}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

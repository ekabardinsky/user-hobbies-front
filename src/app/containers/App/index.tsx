import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addUser, getListOfUsers } from 'app/actions';
import { User } from 'app/models';
import { addUserCall } from 'app/utils/apiHelper';

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

  addUserHandler = async () => {
    const user = { name: this.state.newUserName } as any;
    addUserCall(user, this.getUserList);
  };

  newUserNameChangeHandler = (event: any) => {
    this.setState({ newUserName: event.target.value });
  };

  renderHeader() {
    return (
      <div className={style.Header}>User Hobbies</div>
    );
  }

  renderAddUserBlock() {
    return (
      <div className={style.AddUserBlock}>
        <input className={style.Input} placeholder={'Enter user name'} onChange={this.newUserNameChangeHandler}/>
        <button className={style.ButtonAddUser} onClick={this.addUserHandler}>Add</button>
      </div>
    );
  }

  renderAddHobbyBlock() {
    return (
      <div className={style.AddHobbyBlock}>
        <select className={style.Input}>
          <option style={{ display: 'none' }} value="" disabled selected>Select passion level</option>
          <option>Very-High</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <input className={style.Input} placeholder={'Enter user hobby'}/>
        <input className={style.Input} placeholder={'Enter year'}/>
        <button className={style.ButtonAddUser} onClick={() => {
          console.log('add hobby');
        }}>Add
        </button>
      </div>
    );
  }

  render() {
    const users = this.props.users ? this.props.users : [];
    const hobbiesForTest = [
      { id: '', passion: 'High', name: 'Fishing', year: 2014 },
      { id: '', passion: 'High', name: 'Fishing', year: 2014 },
      { id: '', passion: 'High', name: 'Fishing', year: 2014 },
      { id: '', passion: 'High', name: 'Fishing', year: 2014 },
      { id: '', passion: 'High', name: 'Fishing', year: 2014 },
      { id: '', passion: 'High', name: 'Fishing', year: 2014 }
    ];
    return (
      <div className={style.MainContainer}>
        <div className={style.ContentWrapper}>
          {this.renderHeader()}
          <div className={style.MainContent}>
            <div className={style.UsersBlock}>
              {this.renderAddUserBlock()}
              {users.map((user: User) => {
                return (
                  <div key={user.id} className={style.User}>
                    {user.name}
                  </div>);
                {/*<div>Hobbies: {JSON.stringify(user.hobbies)}</div>*/
                }
              })}
            </div>
            <div className={style.HobbiesBlock}>
              {this.renderAddHobbyBlock()}
              {hobbiesForTest.map((hobby: any) => {
                return (
                  <div key={hobby.id} className={style.HobbyWrapper}>
                    <div className={style.HobbyPassion}>{hobby.passion}</div>
                    <div className={style.HobbyName}>{hobby.name}</div>
                    <div className={style.HobbyYear}>Since {hobby.year}</div>
                    <button onClick={()=> {console.log('Remove Hobby')}}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>


    );
  }
}

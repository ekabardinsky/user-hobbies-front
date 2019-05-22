import * as React from 'react';
import * as style from './style.scss';
import AddHobbyComponent from 'app/components/AddHobby/AddHobby';
import HobbyComponent from 'app/components/Hobby/Hobby';
import { Hobby } from 'app/models';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addUser, getListOfUsers } from 'app/actions';

interface State {
  hobbies: Hobby[]
}

@connect(
  (state) => {
    const selectedUser = state.userState.users.find((user: any) => user.id === state.userState.selectedUserId);
    return { hobbies: selectedUser ? selectedUser.hobbies : [] };
  },
  (dispatch: Dispatch) => ({
    addUser: bindActionCreators(addUser, dispatch),
    getListOfUsers: bindActionCreators(getListOfUsers, dispatch)
  })
)
export default class HobbiesContainer extends React.Component<any, State> {
  constructor(props: any, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <div className={style.HobbiesContainer}>
        <AddHobbyComponent/>
        {this.props.hobbies.map((hobby: any) => {
          return <HobbyComponent key={hobby.id} hobby={hobby}/>;
        })}
      </div>
    );
  }
}

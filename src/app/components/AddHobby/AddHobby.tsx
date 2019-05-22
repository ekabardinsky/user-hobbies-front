import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getListOfUsers } from 'app/actions';
import { addHobbyCall, getUserListCall } from 'app/utils/apiHelper';
import { Hobby, HobbyPassionLevel } from 'app/models';

interface Props {
}

interface State {
  newHobbyPassionLevel: HobbyPassionLevel,
  newHobbyName: string,
  newHobbyYear: number
}

@connect(
  (state) => {
    return {
      users: state.userState.users,
      selectedUserId: state.userState.selectedUserId
    };
  },
  (dispatch: Dispatch) => ({
    getListOfUsers: bindActionCreators(getListOfUsers, dispatch)
  })
)
export default class AddHobbyComponent extends React.Component<any, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }

  getUserList = async () => {
    await getUserListCall(this.props.getListOfUsers);
  };
  addHobbyHandler = async () => {
    const selectedUserId = this.props.selectedUserId;
    const newHobby = {
      name: this.state.newHobbyName,
      year: this.state.newHobbyYear,
      passionLevel: this.state.newHobbyPassionLevel
    } as Hobby;
    await addHobbyCall(selectedUserId, newHobby, this.getUserList); // get UserList is required from updating the hobbies
  };

  newHobbyPassionLevelChangeHandler = (event: any) => {
    this.setState({ newHobbyPassionLevel: event.target.value });
  };
  newHobbyNameChangeHandler = (event: any) => {
    this.setState({ newHobbyName: event.target.value });
  };
  newHobbyYearChangeHandler = (event: any) => {
    this.setState({ newHobbyYear: event.target.value });
  };

  render() {
    return (
      <div className={style.AddHobbyBlock}>
        <select defaultValue={'Select passion level'} className={style.Input}
                onChange={this.newHobbyPassionLevelChangeHandler}>
          <option style={{ display: 'none' }} disabled>Select passion level</option>
          {Object.keys(HobbyPassionLevel).map((item: any) => <option key={item}>{HobbyPassionLevel[item]}</option>)}
        </select>
        <input className={style.Input} placeholder={'Enter user hobby'} onChange={this.newHobbyNameChangeHandler}/>
        <input className={style.Input} placeholder={'Enter year'} onChange={this.newHobbyYearChangeHandler}/>
        <button className={style.ButtonAddHobby} onClick={this.addHobbyHandler}>Add</button>
      </div>
    );
  }
}

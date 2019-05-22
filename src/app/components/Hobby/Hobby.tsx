import * as React from 'react';
import * as style from './style.scss';
import { Hobby } from 'app/models';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getListOfUsers } from 'app/actions';
import { deleteHobbyCall, getUserListCall } from 'app/utils/apiHelper';

interface Props {
  hobby: Hobby
}

interface State {
}

@connect(
  (state) => {
    return {
      selectedUserId: state.userState.selectedUserId
    }
  },
  (dispatch: Dispatch) => ({
    getListOfUsers: bindActionCreators(getListOfUsers, dispatch)
  })
)
export default class HobbyComponent extends React.Component<any, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }

  getUserList = async () => {
    await getUserListCall(this.props.getListOfUsers);
  };

  deleteHobbyHandling = async () => {
    await deleteHobbyCall(this.props.selectedUserId, this.props.hobby.id, this.getUserList)
  };

  render() {
    const hobby = this.props.hobby;

    return (
      <div key={hobby.id} className={style.HobbyWrapper}>
        <div className={style.HobbyPassion}>{hobby.passionLevel}</div>
        <div className={style.HobbyName}>{hobby.name}</div>
        <div className={style.HobbyYear}>Since {hobby.year}</div>
        <button className={style.ButtonDeleteHobby} onClick={this.deleteHobbyHandling}/>
      </div>
    );
  }
}

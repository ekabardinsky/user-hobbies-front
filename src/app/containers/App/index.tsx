import * as React from 'react';
import * as style from './style.scss';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getListOfUsers } from 'app/actions';
import { getUserListCall } from 'app/utils/apiHelper';
import HobbiesContainer from 'app/containers/Hobbies/Hobbies';
import UsersContainer from 'app/containers/Users/Users';

interface Props {
  addUser: Function,
  getListOfUsers: Function
}

interface State {
  newUserName: string
}

@connect(
  (state, ownProps) => {
    return {};
  },
  (dispatch: Dispatch) => ({
    getListOfUsers: bindActionCreators(getListOfUsers, dispatch)
  })
)
export class App extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
    (async () => await this.getUserList())();
  }

  getUserList = async () => {
    await getUserListCall(this.props.getListOfUsers);
  };

  render() {
    return (
      <div className={style.MainContainer}>
        <div className={style.ContentWrapper}>
          <div className={style.Header}>User Hobbies</div>
          <div className={style.MainContent}>
            <UsersContainer/>
            <HobbiesContainer/>
          </div>
        </div>
      </div>
    );
  }
}

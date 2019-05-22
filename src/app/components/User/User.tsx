import * as React from 'react';
import * as style from './style.scss';
import { User } from 'app/models';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { selectUser } from 'app/actions';

interface Props {
  user: User,
}

interface State {
}

@connect(
  (state, ownProps) => {
    return {
      selectedUserId: state.userState.selectedUserId
    };
  },
  (dispatch: Dispatch) => ({
    selectUser: bindActionCreators(selectUser, dispatch)
  })
)
export default class UserComponent extends React.Component<any, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }

  userSelectHandler = () => {
    this.props.selectUser(this.props.user.id);
  };

  render() {
    const user = this.props.user;
    const isSelected = this.props.selectedUserId == user.id;

    return (
      <div className={isSelected ? style.SelectedUser : style.User} onClick={this.userSelectHandler}>
        {user.name}
      </div>);
  }
}

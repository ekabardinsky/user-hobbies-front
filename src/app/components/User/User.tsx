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
  // (state) => {
  //   return { state};
  // },
  (dispatch: Dispatch) => ({
    selectUser: bindActionCreators(selectUser, dispatch)
  })
)

export default class UserComponent extends React.Component<any, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }

  userSelectHandler = () => {
    console.log(this.props.user.id);
    this.props.selectUser(this.props.user.id);// fixme action doesn't work "dispatch is not a function"
  };

  render() {
    const user = this.props.user;
    return (
      <div className={style.User} onClick={this.userSelectHandler}>
        {user.name}
      </div>);
  }
}

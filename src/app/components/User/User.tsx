import * as React from 'react';
import * as style from './style.css';
import { User } from 'app/models';

interface Props {
  user: User
}

interface State {
}


export default class UserComponent extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }


  render() {
    const user = this.props.user;

    return (
      <div className={style.User}>
        {user.name}
      </div>);
  }
}

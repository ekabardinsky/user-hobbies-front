import * as React from 'react';
import * as style from './style.scss';
import { Hobby } from 'app/models';

interface Props {
  hobby: Hobby
}

interface State {
}


export default class HobbyComponent extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }


  render() {
    const hobby = this.props.hobby;

    return (
      <div key={hobby.id} className={style.HobbyWrapper}>
        <div className={style.HobbyPassion}>{hobby.passionLevel}</div>
        <div className={style.HobbyName}>{hobby.name}</div>
        <div className={style.HobbyYear}>Since {hobby.year}</div>
        <button onClick={() => {
          console.log('Remove Hobby');
        }}/>
      </div>
    );
  }
}

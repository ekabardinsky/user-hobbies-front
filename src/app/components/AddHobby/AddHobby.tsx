import * as React from 'react';
import * as style from './style.css';

interface Props {
}

interface State {
}

export default class AddHobbyComponent extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }

  render() {
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
        <button className={style.ButtonAddHobby} onClick={() => {
          console.log('add hobby');
        }}>Add
        </button>
      </div>
    );
  }
}

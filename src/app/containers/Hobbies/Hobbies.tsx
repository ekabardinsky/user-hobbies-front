import * as React from 'react';
import * as style from './style.scss';
import AddHobbyComponent from 'app/components/AddHobby/AddHobby';
import HobbyComponent from 'app/components/Hobby/Hobby';

interface Props {
}

interface State {
  // TODO: connect with store: get users and selected user id. Then get user's hobbies
}


export default class HobbiesContainer extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }


  render() {
    // TODO: const hobbiesForTest = store.users.find(user => user.id === store.selectedUserId).hobbies;
    const hobbiesForTest =
      [
        { id: 1, passionLevel: 'High', name: 'Fishing', year: 2014 },
        { id: 2, passionLevel: 'High', name: 'Fishing', year: 2014 },
        { id: 3, passionLevel: 'High', name: 'Fishing', year: 2014 },
        { id: 4, passionLevel: 'High', name: 'Fishing', year: 2014 },
        { id: 5, passionLevel: 'High', name: 'Fishing', year: 2014 },
        { id: 6, passionLevel: 'High', name: 'Fishing', year: 2014 }
      ];
    return (
      <div className={style.HobbiesBlock}>
        <AddHobbyComponent/>
        {hobbiesForTest.map((hobby: any) => {
          return <HobbyComponent key={hobby.id} hobby={hobby}/>;
        })}
      </div>
    );
  }
}

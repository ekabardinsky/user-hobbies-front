import * as React from 'react';
import { shallow } from 'enzyme';
import UserComponent from './User';

test('UserComponent render name properly', () => {
  const user = {id: 0, name: 'The name', hobbies: []};
  const userComponent = shallow(<UserComponent user={user} />);

  // Interaction demo
  expect(userComponent.text()).toEqual(user.name);
});

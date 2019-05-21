import * as React from 'react';
import { shallow } from 'enzyme';
import { App as UserHobbies } from '../containers/App/index';

test('CheckboxWithLabel changes the text after click', () => {
  const mockedAction = () => {};
  const checkbox = shallow(<UserHobbies addUser={mockedAction} getListOfUsers={mockedAction} users={[]} />);

  // Interaction demo
  checkbox.find('#usernameInput').simulate('change', 'test');
  expect(checkbox.find('#usernameInput').text()).toEqual('test');
});

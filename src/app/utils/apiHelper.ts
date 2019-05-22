export const addUserCall = async (user: any, callback: Function) =>  {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const status = (await response.json()).status;
  if (status === 'OK') {
    // this.props.addUser(user);
    await callback();
  }
};

export const getUserListCall = async (callback: Function) => {
  const response = await fetch('/api/users', {
    method: 'GET'
  });

  const body = (await response.json());
  callback(body)
};

export const addHobbyCall = async (userId: number, hobby: any, callback: Function) =>  {
  const response = await fetch(`/api/users/${userId}/hobbies`, {
    method: 'POST',
    body: JSON.stringify(hobby),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const status = (await response.json()).status;
  if (status === 'OK') {
    await callback();
  }
};

export const deleteHobbyCall = async (userId: number, hobbyId: number, callback: Function) =>  {
  const response = await fetch(`/api/users/${userId}/hobbies/${hobbyId}`, {
    method: 'DELETE'
  });

  const status = (await response.json()).status;
  if (status === 'OK') {
    await callback();
  }
};

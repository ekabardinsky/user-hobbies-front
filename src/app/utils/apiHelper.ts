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

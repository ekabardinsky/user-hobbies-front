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
    callback();
  }
};

let idCounter = 1;
const usersStore = [];

const express = require('express');
const app = express();
app.use(require('body-parser').json());

app.get('/api/users', function (req, res) {
  res.send(usersStore);
});

// add an user
app.post('/api/users', function (req, res) {
  usersStore.push({...req.body, id: idCounter++, hobbies: []});

  res.send({status: 'OK'});
});

//add a hobby
app.post('/api/users/:id/hobbies', function (req, res) {

  const user = usersStore.find(user => user.id == req.params.id);
  const hobby = {...req.body, id: idCounter++};
  if (user.hobbies) {
    user.hobbies.push(hobby);
  } else {
    user.hobbies = [hobby];
  }
  res.send({status: 'OK'});
});

app.delete('/api/users/:userId/hobbies/:hobbieId', function (req, res) {
  const user = usersStore.find(user => user.id == req.params.userId);
  user.hobbies = user.hobbies.filter(hobby => hobby.id != req.params.hobbieId);
  res.send({status: 'OK'});
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

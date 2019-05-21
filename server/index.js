let idCounter = 1;
const usersStore = [];

const express = require('express');
const app = express();
app.use(require('body-parser').json());

app.get('/api/users', function (req, res) {
  res.send(usersStore);
});

app.post('/api/users', function (req, res) {
  console.log(req.body)
  usersStore.push({...req.body, id: idCounter++});

  res.send({status: 'OK'});
});

app.post('/api/users/:id/hobbies', function (req, res) {
  const user = usersStore.find(user => user.id == req.params.id);
  user.hobbies.push({...req.body, id: idCounter++})
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

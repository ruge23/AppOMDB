const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const User = require('./models/users').User;

app.use(express.static(`${__dirname}/node_modules`));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.readFile(`${__dirname}/public/index.html`);
});


app.post('/login', function(req, res){
  console.log(req.body);

  var user = new User({
    username: req.body.username,
    password : req.body.password,
  });

  user.save().then(function(user){
    res.send('Guardamos tus datos exitosamente');
  }, function(err){
      console.log(String(err));
      res.send('Hubo un erro al guardar el usuario');
  });

});

app.listen(3001, function() {
  console.log('Server listening in PORT 3001');
});

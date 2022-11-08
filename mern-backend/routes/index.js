var express = require('express');
var User = require('../model/user');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/users', function(req, res, next) {
  let searchQuery = {};

  if(req.query.name)
    searchQuery = { name: req.query.name };

  User.find(searchQuery, function(err, users){
    if (err) {
      res.status(400);      
      res.send();
    }

    console.log("returning all the users.");
    res.send(users);
  })
});

router.post('/users', function(req, res, next) {
  let newUser = new User(req.body);
  newUser._id = mongoose.Types.ObjectId();

  newUser.save(function(err) {
    if (err) {
      console.log("not saved!");
      res.status(400);
      res.send();
    } else {
      console.log("saved!");
      res.send({ id : newUser._id });
    }

  });
});

router.put('/users/:id', async(req, res) => {
  const update = {name: req.body.name, age: req.body.age}
  const filter = {id: req.params.id}

  const updatedDocument = await User.findOneAndUpdate(filter, update, { new: true });

    return res.status(200).send(updatedDocument);
});



module.exports = router;

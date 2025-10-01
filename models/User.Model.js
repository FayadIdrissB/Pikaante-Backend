const mongoose = require('mongoose');


// Schema de création d'utilisateur
const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);
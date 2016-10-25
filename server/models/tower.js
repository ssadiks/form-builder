var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TowerSchema = new Schema({
    title: String
});

module.exports = mongoose.model('Tower', TowerSchema);
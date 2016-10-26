var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeroSchema = new Schema({
    name: String,
    tower: { type: mongoose.Schema.Types.ObjectId, ref: 'Tower'}
});

module.exports = mongoose.model('Hero', HeroSchema);
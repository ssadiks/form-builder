var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TowerSchema = new Schema({
    title: String,
    heroes: [{ type: Schema.Types.ObjectId, ref: 'Hero' }]
});

module.exports = mongoose.model('Tower', TowerSchema);
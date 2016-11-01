var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var TowerSchema = new Schema({
    title: {
        type: String,
        trim: true,
        lowercase: true,
        unique: false,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address']
    },
    date_created: Date,
    heroes: [{
      id: false,
      name: {
        type: String,
        required: 'Nams is required'
      },
      power: {
        type: String,
        required: 'Power is required',
        trim: true,
        enum: ['Speed', 'Strength', 'Flexibility']
      },
      champion: Boolean
      }]
});

module.exports = mongoose.model('Tower', TowerSchema);
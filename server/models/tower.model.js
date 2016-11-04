var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TowerSchema = new Schema({
    title: {
        type: String,
        trim: true,
        unique: false,
        required: 'Title is required'
    },
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: 'Form Name is required'
    },
    display_label: Boolean,
    heroes: [{
      id: false,
      type_field: {
        type: String,
        required: 'Type is required',
        trim: true,
        enum: ['text', 'select', 'checkbox', 'radio', 'textarea', 'button']
      },
      name: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Name Field is required'
      },      
      label: {
        type: String,
        trim: true
      },
      help_text: {
        type: String,
        trim: true
      },
      required: Boolean,
      placeholder: {
        type: String,
        trim: true
      },
      options_list: String
      }]
});

module.exports = mongoose.model('Tower', TowerSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beerSchema = new Schema({

});

module.exports = mongoose.model('Beer', beerSchema);
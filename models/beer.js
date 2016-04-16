var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Beers = new Schema({

});

var Beer = mongoose.model('Beer', Beers);
module.exports = Beer;

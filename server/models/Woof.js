const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WoofSchema = new Schema({
    name: String,
    content: String,
})

module.exports = mongoose.model('Woof', WoofSchema);
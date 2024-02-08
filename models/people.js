const mongoose = require('./connection')

const PeopleSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String,
})

const People = mongoose.model('people', PeopleSchema)

module.exports = People
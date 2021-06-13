const mongoose = require('mongoose');

const workerSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    passWord: {
        type: String,
        // require: true
    },    
    status: {
        type: String,
        require: true
    },
})
module.exports = mongoose.model('Worker', workerSchema)
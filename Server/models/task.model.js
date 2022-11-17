const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    item:{
        type:String,
        required:[true, "{PATH} must be present"]
    },
    status:{
        type:String,
        default: 'to-do'
    }

}, {timestamps: true})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task;
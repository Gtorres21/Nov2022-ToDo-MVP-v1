const mongoose = require('mongoose');
// const Task = require('./task.model');


const TaskSchema = new mongoose.Schema({
    item:{
        type:String,
        required:[true, "{PATH} must be present"]
    }
})


const ColumnSchema = new mongoose.Schema({
    todo:{
        name: {
            type: String,
            default: 'To Do'
        },
        tasks:[TaskSchema]
    },
    inprogress:{
        name: {
            type: String,
            default: 'In Progress'
        },
        tasks:[TaskSchema]
    },
    completed:{
        name:{
            type: String,
            default: 'Completed'
        },
        tasks:[TaskSchema]
    }
})




// Create Schema and Exporting
const Column = mongoose.model('Column', ColumnSchema);
// const Task = mongoose.model('Task', TaskSchema)

module.exports = Column;
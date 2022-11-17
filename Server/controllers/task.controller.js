const Task = require("../models/task.model")

module.exports = {
    //  Create One
    create: (req, res) => {
        console.log(req.body)
        Task.create(req.body)
            .then(newTask =>{
                console.log('✅✅✅✅--------------✅✅✅✅✅')
                res.json(newTask)
            })
            .catch(err =>{
                console.log('❌✖❌- SERVER ERROR -✖❌✖')
                res.status(400).json(err)
            })
    },

    // Find ALL
    findAll: (req, res) => {
        Task.find()
        .then(allTask => {
            res.json(allTask)
        })
        .catch(err =>{
            res.json(err)
        })
    },
            // Find One
    findOne: (req, res) => {
        Task.findById(req.params.id)
            .then(oneTask => {
                console.log('✅✅✅✅- FOUND PRODUCT -✅✅✅✅✅')
                res.json(oneTask)
            })
            .catch(err => {
                console.log('❌✖❌✖- ERROR FINDING  -❌✖❌✖')
                res.json(err)
            })
    },

       // Update One
    updateOne: (req, res) => {
        console.log("Updated ID:", req.params.id);
        console.log("req.body:", req.body)
        Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedTask => {
                console.log("✅✅✅- UPDATED Task-✅✅✅")
                res.json(updatedTask)
            })
            .catch(err => {
                console.log("❌✖❌- ERROR UPDATING-✖❌✖")
                res.status(400).json(err)
            })
    },

        // Delete One
    delete: (req, res) => {
        Task.findByIdAndDelete(req.params.id)
            .then(result => {
                console.log("✅✅✅- DELETED -✅✅✅")
                res.json(result)
            })
            .catch(err => {
                console.log("❌✖❌- ERROR DELETING -✖❌✖")
                res.json(err)
            })
    }
}
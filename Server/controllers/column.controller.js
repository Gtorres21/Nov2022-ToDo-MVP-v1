const Column = require("../models/column.model")

module.exports = {
        //  Create One
        create: (req, res) => {
            console.log(req.body)
        Column.create(req.body)
                .then(newColumn =>{
                    console.log('✅✅✅✅--------------✅✅✅✅✅')
                    res.json(newColumn)
                })
                .catch(err =>{
                    console.log('❌✖❌- SERVER ERROR -✖❌✖')
                    res.status(400).json(err)
                })
        },

        // Find ALL
        findAll: (req, res) => {
            Column.find()
            .then(allColumns => {
                res.json(allColumns)
            })
            .catch(err =>{
                res.json(err)
            })
        },
                // Find One
        findOne: (req, res) => {
            Column.findById(req.params.id)
                .then(oneColumn => {
                    console.log('✅✅✅✅- FOUND Column -✅✅✅✅✅')
                    res.json(oneColumn)
                })
                .catch(err => {
                    console.log('❌✖❌✖- ERROR FINDING One -❌✖❌✖')
                    res.json(err)
                })
        },

           // Update One
        updateOne: (req, res) => {
            console.log("Updated ID:", req.params.id);
            console.log("req.body:", req.body)
            Column.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
                .then(updatedColumn => {
                    console.log("✅✅✅- UPDATED Column-✅✅✅")
                    res.json(updatedColumn)
                })
                .catch(err => {
                    console.log("❌✖❌- ERROR UPDATING-✖❌✖")
                    res.status(400).json(err)
                })
        },

            // Delete One
        delete: (req, res) => {
            Column.findByIdAndDelete(req.params.id)
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